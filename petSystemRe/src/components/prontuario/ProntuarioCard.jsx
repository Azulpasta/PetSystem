import { ChevronRight } from 'lucide-react';

const ProntuarioCard = ({ record, onClick }) => {
  return (
    <div 
      onClick={() => onClick(record.id)}
      className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md hover:border-purple-100 transition-all cursor-pointer group"
    >
      <div className="flex items-center gap-5">
        {/* Avatar Placeholder */}
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl ${record.avatarColor}`}>
          {record.animalName.charAt(0)}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h4 className="text-xl font-bold text-gray-800">{record.animalName}</h4>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider 
              ${record.status === 'Ativo' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-gray-50 text-gray-400 border border-gray-100'}`}>
              {record.status}
            </span>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            {record.species} • {record.breed}
          </p>
          <div className="text-xs text-gray-400 mt-1">
            <span className="font-bold text-gray-500 uppercase text-[9px]">Tutor(a):</span> {record.tutor}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="text-right hidden sm:block">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Última consulta</p>
          <p className="text-sm font-bold text-gray-700">{record.lastVisit}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#8A2BE2] group-hover:text-white transition-all">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default ProntuarioCard;