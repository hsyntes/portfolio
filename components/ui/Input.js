const Input = ({
  type,
  name,
  placeholder,
  className,
  value,
  onChange,
  onBlur,
  autoFocus,
}) => {
  const classes = `form-input peer w-full bg-light lg:bg-white dark:bg-black lg:dark:bg-dark border-0 border-b border-b-gray-400 dark:border-b-gray-600 focus:border-b-primary placeholder:text-light placeholder:lg:text-white placeholder:lg:dark:text-dark placeholder:dark:text-black focus:ring-0 ps-0 ${className}`;

  return (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={classes}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autoFocus}
      />
      <label
        htmlFor={name}
        className="absolute peer left-0 top-0 peer-placeholder-shown:!top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 peer-focus:!top-0 transition-all"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
