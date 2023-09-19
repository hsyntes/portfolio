const Hr = ({ className }) => {
  const classes = `bg-dark dark:bg-light opacity-10 dark:opacity-20 h-0.5 border-none ${className}`;

  return <hr className={classes} />;
};

export default Hr;
