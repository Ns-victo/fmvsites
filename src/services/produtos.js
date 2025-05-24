import supabase from './supabaseCliente';

const supabaseUrl = 'https://uwkexminxxaowazblrsg.supabase.co'; // URL do seu projeto
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3a2V4bWlueHhhb3dhemJscnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NjI4MTAsImV4cCI6MjA2MzQzODgxMH0.TlK63-N9tQKHw9eJywdFBVdnMcAUPWk-hSb_ZX_-5ro'; // chave pública do projeto

// Cria um novo produto
export async function createProduto(produto) {
  const { data, error } = await supabase
    .from('produtos')
    .insert([produto]);
  return { data, error };
}

// Recupera todos os produtos
export async function getProdutos() {
  const { data, error } = await supabase
    .from('produtos')
    .select('*');
  return { data, error };
}

// Atualiza um produto pelo id (assumindo que sua tabela possui uma coluna "id")
export async function updateProduto(id, updates) {
  const { data, error } = await supabase
    .from('produtos')
    .update(updates)
    .eq('id', id);
  return { data, error };
}

// Deleta um produto pelo id
export async function deleteProduto(id) {
  const { data, error } = await supabase
    .from('produtos')
    .delete()
    .eq('id', id);
  return { data, error };
}