import { useState, useEffect } from 'react';
import { supabase } from '../store/supabaseClient';

export function useResenas() {
  const [user,      setUser]      = useState(null);
  const [resenas,   setResenas]   = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [enviando,  setEnviando]  = useState(false);
  const [error,     setError]     = useState('');
  const [exito,     setExito]     = useState(false);

  // ── Sesión activa ──────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  // ── Cargar reseñas aprobadas ───────────────────
  useEffect(() => {
    fetchResenas();
  }, []);

  async function fetchResenas() {
    setLoading(true);
    const { data, error } = await supabase
      .from('resenas')
      .select('id, nombre, estrellas, comentario, created_at')
      .eq('aprobado', true)
      .order('created_at', { ascending: false });

    if (!error) setResenas(data ?? []);
    setLoading(false);
  }

  // ── Login con Google ───────────────────────────
  async function loginGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options:  { redirectTo:'http://localhost:5173',  },
    });
  }

  // ── Logout ─────────────────────────────────────
  async function logout() {
    await supabase.auth.signOut();
  }

  // ── Enviar reseña ──────────────────────────────
  async function enviarResena({ celular, estrellas, comentario }) {
    setError('');
    setExito(false);

    if (!celular.trim() || !comentario.trim()) {
      setError('Por favor completa todos los campos.');
      return;
    }
    if (comentario.trim().length < 10) {
      setError('El comentario debe tener al menos 10 caracteres.');
      return;
    }

    setEnviando(true);

    const { error: err } = await supabase.from('resenas').insert({
      user_id:    user.id,
      nombre:     user.user_metadata?.full_name  ?? 'Cliente',
      correo:     user.email,
      celular:    celular.trim(),
      estrellas,
      comentario: comentario.trim(),
    });

    setEnviando(false);

    if (err) {
      setError('Hubo un error al enviar tu reseña. Inténtalo nuevamente.');
    } else {
      setExito(true);
    }
  }

  return {
    user, resenas, loading, enviando, error, exito,
    loginGoogle, logout, enviarResena, fetchResenas,
  };
}