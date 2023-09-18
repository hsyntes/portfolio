const Button = ({ type, variant, className, onClick, disabled, children }) => {
  let classes = `rounded shadow font-semibold text-sm px-5 py-2 ${className} transition-all `;

  // * Button variants
  if (variant === "primary")
    classes +=
      "bg-gradient-to-r from-primary to-secondary hover:from-primary-darker hover:to-secondary-darker text-white";

  if (variant === "secondary")
    classes += "bg-gradient-to-r from-secondary to-primary text-white";

  if (variant === "dark") classes += "bg-dark hover:bg-black text-white";

  if (variant === "light") classes += "bg-light hover:bg-white text-dark";

  if (variant === "none") classes += "bg-none !shadow-none";

  if (variant === "link")
    classes +=
      "bg-gradient-to-r from-primary to-secondary hover:from-primary-darker hover:to-secondary-darker bg-clip-text text-transparent !shadow-none !rounded-none !p-0";

  if (variant === "blue") classes += "bg-blue-500 hover:bg-blue-700";

  if (variant === "blue-link")
    classes +=
      "bg-none text-blue-500 hover:text-blue-700 !shadow-none !rounded-none !p-0";

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
