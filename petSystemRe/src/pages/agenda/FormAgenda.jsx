import { useState } from 'react';
import { Search, CalendarDays } from 'lucide-react';

const FormNewAppointment = ({ onCancel, onSubmit, onGoToAgenda }) => {
  const [formData, setFormData] = useState({
    type: '',
    doctor: '',
    procedure: '',
    tutor: '',
    patient: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dados já estão prontos para o backend (provavelmente)
    onSubmit(formData);
  };

  const inputClass = "w-full bg-white border border-gray-200 rounded-xl p-3 outline-none focus:border-[#8A2BE2] transition-colors text-sm";
  const labelClass = "block text-sm font-bold text-gray-700 mb-2";

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex flex-col">
      <div className="flex-1 p-8 flex flex-col gap-6 overflow-y-auto">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Novo agendamento</h2>
            <p className="text-gray-400 text-sm mt-1">Marque um novo atendimento na agenda com o tipo, horário e profissional</p>
          </div>
          <button
            onClick={onGoToAgenda}
            className="px-6 py-2 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-colors"
          >
            Voltar
          </button>
        </header>

        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100 space-y-6 w-full max-w-4xl">
        <div>
          <label className={labelClass}>Tipo de atendimento (obrigatório):</label>
          <select name="type" required value={formData.type} onChange={handleChange} className={inputClass}>
            <option value="">Selecione o tipo...</option>
            <option value="EXAME">Exame</option>
            <option value="CIRURGIA">Cirurgia</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Veterinário responsável:</label>
          <select name="doctor" value={formData.doctor} onChange={handleChange} className={inputClass}>
            <option value="">Selecionar veterinário...</option>
            <option value="Dr. Exemplo 1">Dr. Exemplo 1</option>
            <option value="Dr. Exemplo 2">Dr. Exemplo 2</option>
            <option value="Dra. Lima">Dra. Lima</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Descrição / Procedimento:</label>
          <textarea 
            name="procedure" 
            placeholder="Descreva o procedimento..." 
            value={formData.procedure} 
            onChange={handleChange} 
            className={`${inputClass} min-h-[100px] resize-none`}
          />
        </div>


        { /* DEPOIS TEM QUE ALTERAR PARA PESQUISAR O TUTOR E APARECER OS ANIMAIS ESPECIFICOS DESSE TUTOR */ }
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Nome do tutor:</label>
            <div className="relative">
              <input 
                name="tutor" 
                type="text" 
                placeholder="Pesquisar tutor..." 
                value={formData.tutor} 
                onChange={handleChange} 
                className={`${inputClass} pl-10`}
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Animal:</label>
            <select name="patient" value={formData.patient} onChange={handleChange} className={inputClass}>
              <option value="">Selecionar animal...</option>
              <option value="Mel">Mel</option>
              <option value="Theo">Theo</option>
              <option value="Pitoco">Pitoco</option>
              <option value="Luna">Luna</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h4 className="font-bold text-gray-800 mb-4 uppercase text-xs tracking-wider">Data e Horário</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Selecione o dia:</label>
              <div className="relative">
                <input 
                  name="date" 
                  type="date" 
                  required
                  value={formData.date} 
                  onChange={handleChange} 
                  className={`${inputClass} pl-10`}
                />
                <CalendarDays className="absolute left-3 top-3 text-gray-400" size={18} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Horários disponíveis:</label>
              {/* HORARIOS DE ACORDO COM O QUE ELES. TÊM FUTURAMENTE A GENTE PODE RETIRAR OS HORARIOS QUE JA FORAM UTILIZADOS */ }
              <select name="time" required value={formData.time} onChange={handleChange} className={inputClass}>
                <option value="">Selecione o horário...</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            type="button" 
            onClick={onCancel}
            className="flex-1 border-2 border-gray-200 text-gray-500 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all"
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="flex-1 bg-[#8A2BE2] text-white py-4 rounded-2xl font-bold shadow-lg shadow-purple-100 hover:bg-[#7023b8] transition-all"
          >
            Confirmar agendamento
          </button>
        </div>
      </form>
        </div>
    </div>
    </div>
  );
};

export default FormNewAppointment;