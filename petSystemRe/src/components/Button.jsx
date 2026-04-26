
// botão roxo
export const Button = ({ children, onClick, type = "button", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`w-full font-bold py-3 px-4 rounded-lg shadow-md transition-colors duration-200 mt-4 mb-6 flex items-center justify-center text-lg ${disabled
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-[#8A2BE2] hover:bg-[#7724c7] text-white"
                }`}
        >
            {children}
        </button>
    );
};


// botão rosa
export const QuickAction = ({ label, color, onClick, icon: Icon }) => (
    <button
        onClick={onClick}
       className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shadow-sm transition-transform active:scale-95 ${color} hover:bg-[#b0164e] transition-all cursor-pointer`}
    >
        <div className="w-5 h-5 flex items-center justify-center">
            {Icon ? <Icon size={20} /> : <div className="w-5 h-5 border border-white/30 rounded" />}
        </div>
        {label}
    </button>
);

export default Button;