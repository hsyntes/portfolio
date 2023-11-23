const Badge = ({ variant, className, children }) => {
  let classes = `badge font-normal text-xs lg:text-base rounded px-4 py-1 ${className} `;

  if (variant === "primary")
    classes += "bg-gradient-to-r from-primary to-secondary text-white";
  if (variant === "secondary")
    classes += "bg-gradient-to-r from-secondary to-primary text-white";
  if (variant === "dark" || variant === "black")
    classes += "bg-dark text-white";
  if (variant === "light" || variant === "white")
    classes += "bg-light text-dark";

  return <span className={classes}>{children}</span>;
};

export default Badge;
