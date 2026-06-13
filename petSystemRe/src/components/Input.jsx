const InputForm = ({ label, type, placeholder, value, onChange, id, name }) => {
  return (
    <div className="flex flex-col w-full mb-4">
      <label htmlFor={id} className="text-gray-700 font-medium mb-1 text-sm">
        {label}:
      </label>
      <input
        id={id}
        name={name || id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all bg-white"
      />
    </div>
  );
};
export default InputForm;
