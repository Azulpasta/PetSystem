import { apiCall } from './api';

function formatarDataParaBr(dataIso) {
  if (!dataIso) return '';
  const partes = String(dataIso).split('-');
  if (partes.length !== 3) return dataIso;
  const [ano, mes, dia] = partes;
  return `${dia}/${mes}/${ano}`;
}

function formatarDataParaIso(dataBr) {
  if (!dataBr) return '';
  const partes = String(dataBr).split('/');
  if (partes.length !== 3) return dataBr;
  const [dia, mes, ano] = partes;
  return `${ano}-${mes}-${dia}`;
}

function normalizeLancamento(lancamento) {
  return {
    id: lancamento.id,
    data: lancamento.data || formatarDataParaBr(lancamento.data_lancamento),
    descricao: lancamento.descricao,
    categoria: lancamento.categoria,
    valor: Number(lancamento.valor || 0),
    status: lancamento.status || 'Pago',
    tipo: lancamento.tipo === 'despesa' ? 'gasto' : lancamento.tipo,
    forma_pagamento: lancamento.forma_pagamento,
    pet_id: lancamento.pet_id,
    tutor_id: lancamento.tutor_id,
  };
}

export async function listarLancamentos(filters = {}) {
  const queryParams = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, value);
    }
  });
  const query = queryParams.toString() ? `?${queryParams.toString()}` : '';
  const response = await apiCall(`/lancamentos-financeiros${query}`, { method: 'GET' });
  return (response.data || []).map(normalizeLancamento);
}

export async function adicionarLancamento(lancamento) {
  const response = await apiCall('/lancamentos-financeiros', {
    method: 'POST',
    body: JSON.stringify({
      descricao: lancamento.descricao,
      categoria: lancamento.categoria,
      valor: lancamento.valor,
      status: lancamento.status,
      tipo: lancamento.tipo === 'gasto' ? 'despesa' : lancamento.tipo,
      data: formatarDataParaIso(lancamento.data),
      forma_pagamento: lancamento.forma_pagamento || 'pix',
      pet_id: lancamento.pet_id || null,
      tutor_id: lancamento.tutor_id || null,
      atendimento_id: lancamento.atendimento_id || null,
      servico_id: lancamento.servico_id || null,
    }),
  });
  return normalizeLancamento(response.data);
}

export async function atualizarStatusLancamento(id, status) {
  const response = await apiCall(`/lancamentos-financeiros/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
  return normalizeLancamento(response.data);
}
