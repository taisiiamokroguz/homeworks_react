const InputField = ({ label, register, name, validation, errors, getFieldState }) => (
    <div className="form-group">
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
      <input 
        type="text" 
        className={`${name}-input`}  
        {...register(name, validation)} 
      />
      {errors[name] && <p className="error">{errors[name]?.message}</p>}
      {!errors[name] && getFieldState(name).isTouched && (
        <p className="success">Success</p>
      )}
    </div>
  );

  export default InputField;