const Button = ({ type, variant, className, onClick, children }) => {
  let classes = `rounded shadow font-semibold text-sm px-4 py-2 ${className} transition-all `;

  if (variant === "primary")
    classes +=
      "bg-gradient-to-r from-primary to-secondary hover:from-primary-darker hover:to-secondary-darker text-white";

  if (variant === "secondary")
    classes += "bg-gradient-to-r from-secondary to-primary text-white";

  if (variant === "dark") classes += "bg-dark hover:bg-black text-white";

  if (variant === "light") classes += "bg-light hover:bg-white text-dark";

  if (variant === "link")
    classes +=
      "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent !shadow-none !rounded-none !p-0";

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
