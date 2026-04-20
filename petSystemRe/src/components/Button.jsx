
const Button = ({ children, onClick, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full font-bold py-3 px-4 rounded-lg shadow-md transition-colors duration-200 mt-4 mb-6 flex items-center justify-center text-lg ${
        disabled
          ? "bg-gray-400 text-gray-600 cursor-not-allowed"
          : "bg-[#8A2BE2] hover:bg-[#7724c7] text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;