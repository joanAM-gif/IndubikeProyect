import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL  = 'https://cpejkaagynpaltjxsaui.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwZWprYWFneW5wYWx0anhzYXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjYxNDIsImV4cCI6MjA5NDEwMjE0Mn0.hISk5vC1UBkJhmFMWY2Uoqh0ftk0rIvKgcxeMKahwu8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);