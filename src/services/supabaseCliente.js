import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uwkexminxxaowazblrsg.supabase.co'; // substitua pela sua URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3a2V4bWlueHhhb3dhemJscnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NjI4MTAsImV4cCI6MjA2MzQzODgxMH0.TlK63-N9tQKHw9eJywdFBVdnMcAUPWk-hSb_ZX_-5ro'; // substitua pela sua chave anônima

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;


