import { use, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function NovoRegistro() {
  const navigate = useNavigate();
  const { id } = useParams();

  const abas = ["Consultas", "Vacinas", "Cirurgias", "Exames"];
  const [abaAtiva, setAbaAtiva] = useState("Consultas");

  const [dataHora, setDataHora] = useState("");
  const [veterinario, setVeterinario] = useState("");

  // consulta
  const [motivoConsulta, setMotivoConsulta] = useState("");
  const [peso, setPeso] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [freqCardiaca, setFreqCardiaca] = useState("");
  const [diagnostico, setDiagnostico] = useState("");

  // vacina
  const [nomeVacina, setNomeVacina] = useState("");
  const [lote, setLote] = useState("");
  const [proximoReforcao, setProximoReforcao] = useState("");
  const [obsVacina, setObsVacina] = useState("");

  // cirurgia
  const [tipoCirurgia, setTipoCirurgia] = useState("");
  const [tipoAnestesia, setTipoAnestesia] = useState("");
  const [obsCirurgia, setObsCirurgia] = useState("");

  // exame
  const [tipoExame, setTipoExame] = useState("");
  const [laudo, setLaudo] = useState("");

  const labelSalvar = {
    Consultas: "Salvar Consulta",
    Vacinas: "Salvar Vacina",
    Cirurgias: "Salvar Cirurgia",
    Exames: "Salvar Laudo",
  }[abaAtiva];

  function handleSalvar() {
    // objeto de acordo com a aba
    const base = { dataHora, veterinario };
    let novoRegistro = {};
    if (abaAtiva === "Consultas") {
      novoRegistro = { ...base, tipo: "Consulta", descricao: motivoConsulta, peso, temperatura, freqCardiaca, observacoes: diagnostico };
    } else if (abaAtiva === "Vacinas") {
      novoRegistro = { ...base, tipo: "Vacinação", descricao: nomeVacina, lote, proximoReforcao, observacoes: obsVacina };
    } else if (abaAtiva === "Cirurgias") {
      novoRegistro = { ...base, tipo: "Cirurgia", descricao: tipoCirurgia, tipoAnestesia, observacoes: obsCirurgia };
    } else {
      novoRegistro = { ...base, tipo: "Exame", descricao: tipoExame, observacoes: laudo };
    }
    // enviar para a API: POST /api/prontuarios/:id/historico
    console.log("Salvando registro:", novoRegistro);
    navigate(`/dashboard/prontuarios/${id}`);
  }

  return (
    <div className="flex-1 min-h-screen bg-gray-50 flex flex-col">
      <button
        onClick={() => navigate(`/dashboard/prontuarios/${id}`)}
        className="flex items-center gap-1 text-gray-500 hover:text-purple-700 text-sm p-8 pb-0"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Voltar
      </button>

      <div className="flex-1 px-8 py-6 max-w-4xl w-full mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Novo Registro no Histórico</h1>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex border-b border-gray-200 mb-5">
            {abas.map((aba) => (
              <button
                key={aba}
                onClick={() => setAbaAtiva(aba)}
                className={`flex-1 pb-2 text-sm font-medium transition-colors ${
                  abaAtiva === aba
                    ? "text-pink-500 border-b-2 border-pink-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {aba}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Data e hora:</label>
              <input
                type="datetime-local"
                value={dataHora}
                onChange={(e) => setDataHora(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 mb-1 block">Veterinário responsável:</label>
              <input
                type="text"
                value={veterinario}
                onChange={(e) => setVeterinario(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* específicos por aba */}
          {abaAtiva === "Consultas" && (
            <>
              <div className="mb-4">
                <label className="text-sm text-gray-700 mb-1 block">Motivo da consulta:</label>
                <input type="text" value={motivoConsulta} onChange={(e) => setMotivoConsulta(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div>
                  <label className="text-sm text-gray-700 mb-1 block">Peso:</label>
                  <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div>
                  <label className="text-sm text-gray-700 mb-1 block">Temperatura:</label>
                  <input type="text" value={temperatura} onChange={(e) => setTemperatura(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div>
                  <label className="text-sm text-gray-700 mb-1 block">Frequência cardíaca:</label>
                  <input type="text" value={freqCardiaca} onChange={(e) => setFreqCardiaca(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm text-gray-700 mb-1 block">Diagnóstico / Prescrição:</label>
                <textarea rows={4} value={diagnostico} onChange={(e) => setDiagnostico(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" />
              </div>
            </>
          )}

          {abaAtiva === "Vacinas" && (
            <>
              <div className="mb-4">
                <label className="text-sm text-gray-700 mb-1 block">Nome da vacina:</label>
                <input type="text" value={nomeVacina} onChange={(e) => setNomeVacina(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-gray-700 mb-1 block">Lote / fabricante:</label>
                  <input type="text" value={lote} onChange={(e) => setLote(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div>
                  <label className="text-sm text-gray-700 mb-1 block">Próximo reforço:</label>
                  <input type="date" value={proximoReforcao} onChange={(e) => setProximoReforcao(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm text-gray-700 mb-1 block">Observações:</label>
                <textarea rows={4} value={obsVacina} onChange={(e) => setObsVacina(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" />
              </div>
            </>
          )}

          {abaAtiva === "Cirurgias" && (
            <>
              <div className="mb-4">
                <label className="text-sm text-gray-700 mb-1 block">Procedimento cirurgico:</label>
                <input type="text" value={tipoCirurgia} onChange={(e) => setTipoCirurgia(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="mb-4">
                <label className="text-sm text-gray-700 mb-1 block">Tipo de anestesia:</label>
                <input type="text" value={tipoAnestesia} onChange={(e) => setAnestesia(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="mb-4">
                <label className="text-sm text-gray-700 mb-1 block">Observações:</label>
                <textarea rows={5} value={obsCirurgia} onChange={(e) => setObsCirurgia(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" />
              </div>
            </>
          )}

          {abaAtiva === "Exames" && (
            <>
              <div className="mb-4">
                <label className="text-sm text-gray-700 mb-1 block">Tipo de exame:</label>
                <input type="text" value={tipoExame} onChange={(e) => setTipoExame(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="mb-4">
                <label className="text-sm text-gray-700 mb-1 block">Laudo digital:</label>
                <textarea rows={6} value={laudo} onChange={(e) => setLaudo(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" />
              </div>
            </>
          )}

          <div className="flex gap-3 mt-6">
            <button onClick={() => navigate(`/dashboard/prontuarios/${id}`)}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl py-3 transition-colors">
              Cancelar
            </button>
            <button onClick={handleSalvar}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl py-3 transition-colors">
              {labelSalvar}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
