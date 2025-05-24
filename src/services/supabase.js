// src/Services/supabase.js
import 'react-native-url-polyfill/auto'; // se for React Native
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uwkexminxxaowazblrsg.supabase.co'; // URL do seu projeto
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3a2V4bWlueHhhb3dhemJscnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NjI4MTAsImV4cCI6MjA2MzQzODgxMH0.TlK63-N9tQKHw9eJywdFBVdnMcAUPWk-hSb_ZX_-5ro'; // chave pública do projeto


export const supabase = createClient(supabaseUrl, supabaseKey);


