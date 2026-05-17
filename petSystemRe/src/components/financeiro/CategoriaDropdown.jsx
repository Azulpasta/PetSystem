import { useState, useRef, useEffect } from 'react';

const CATEGORIAS_RECEITA = ["Consulta","Vacina","Cirurgia","Exame","Outro"];
const CATEGORIAS_GASTO = ["Gasto","Insumo","Equipamento","Funcionário","Outro"];
const TODAS_CATEGORIAS = [...new Set([...CATEGORIAS_RECEITA, ...CATEGORIAS_GASTO])];

function CategoriaDropdown({ valor, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const label = valor === "Todas as categorias" ? "Todas as categorias" : valor;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors min-w-[180px] justify-between"
      >
        <span>{label}</span>
        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-20 overflow-hidden min-w-[180px]">
          {["Todas as categorias", ...TODAS_CATEGORIAS].map(c => (
            <button key={c} onClick={() => { onChange(c); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-purple-50 ${valor === c ? "text-purple-700 font-semibold bg-purple-50" : "text-gray-700"}`}>
              {c}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoriaDropdown;