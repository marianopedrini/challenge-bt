const FormGroup = ({ type, label, name, value, handleChange }) => {
  return (
    <div className="mb-6 form-group">
      <div>
        <label>{label}</label>
        <br />
        <input
          type={type}
          value={value}
          name={name}
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-400"
        />
      </div>
    </div>
  );
};

export default FormGroup;
