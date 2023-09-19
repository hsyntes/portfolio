const Hr = ({ className }) => {
  const classes = `bg-gray-200 dark:bg-gray-700 h-0.5 border-none ${className}`;

  return <hr className={className} />;
};

export default Hr;
