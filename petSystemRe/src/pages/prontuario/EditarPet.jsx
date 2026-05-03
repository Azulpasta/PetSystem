// (somente admins) 
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarPet() {
  const navigate = useNavigate();
  const { id } = useParams();

  // substituir pela chamada real à API
  const mockProntuario = {
    pet: {
      id: "1",
      nome: "Theo",
      foto: null,
      especie: "Cachorro",
      raca: "Shih Tzu",
      sexo: "Macho",
      idade: "5 anos",
      observacoes: "Castrado",
    },
    tutor: {
      nome: "Julia Eduarda Fernandes Silva",
      genero: "Feminino",
      dataNascimento: "01/12/2006",
      cpf: "111.111.111-11",
      celular: "(34) 99999-9999",
      email: "juliaefs@unipam.edu.br",
      endereco: "Rua Major Gote, número 1. Bairro Caiçaras - Patos de Minas, Minas Gerais.",
      complemento: "Em frente ao UNIPAM",
    },
  };

  const [form, setForm] = useState({ ...mockProntuario.pet });
  const [formTutor, setFormTutor] = useState({ ...mockProntuario.tutor });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    // buscar dados reais quando o backend estiver pronto
  }, [id]);

  function handleSalvar() {
    // enviar para a API: PUT /api/prontuarios/:id
    setLoading(true);
    // apenas simulando salvamento
    setTimeout(() => {
      setLoading(false);
      navigate(`/dashboard/prontuarios/${id}`);
    }, 1000);
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
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Editar Cadastro do Pet</h1>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-3">Dados do Animal</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[["Nome", "nome"], ["Espécie", "especie"], ["Raça", "raca"], ["Sexo", "sexo"], ["Idade", "idade"]].map(([label, key]) => (
              <div key={key}>
                <label className="text-sm text-gray-700 mb-1 block">{label}:</label>
                <input value={form[key] || ""} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>
            ))}
            <div className="col-span-2">
              <label className="text-sm text-gray-700 mb-1 block">Observações:</label>
              <input value={form.observacoes || ""} onChange={(e) => setForm({ ...form, observacoes: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
          </div>

          <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-3">Dados do Tutor</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[["Nome", "nome"], ["Gênero", "genero"], ["Data de Nascimento", "dataNascimento"], ["CPF", "cpf"], ["Celular", "celular"], ["Email", "email"]].map(([label, key]) => (
              <div key={key}>
                <label className="text-sm text-gray-700 mb-1 block">{label}:</label>
                <input value={formTutor[key] || ""} onChange={(e) => setFormTutor({ ...formTutor, [key]: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>
            ))}
            <div className="col-span-2">
              <label className="text-sm text-gray-700 mb-1 block">Endereço:</label>
              <input value={formTutor.endereco || ""} onChange={(e) => setFormTutor({ ...formTutor, endereco: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
            <div className="col-span-2">
              <label className="text-sm text-gray-700 mb-1 block">Complemento:</label>
              <input value={formTutor.complemento || ""} onChange={(e) => setFormTutor({ ...formTutor, complemento: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => navigate(`/dashboard/prontuarios/${id}`)}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl py-3 transition-colors">
              Cancelar
            </button>
            <button onClick={handleSalvar} disabled={loading}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl py-3 transition-colors disabled:opacity-50">
              {loading ? "Salvando..." : "Salvar Alterações"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}