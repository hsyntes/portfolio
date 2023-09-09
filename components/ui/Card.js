const Card = ({ className, children }) => {
  const classes = `card rounded shadow bg-white dark:bg-dark p-12 mx-auto ${className}`;
  return <div className={classes}>{children}</div>;
};

const CardHeader = ({ className, children }) => {
  const classes = `card-header flex items-center ${className}`;
  return <div className={classes}>{children}</div>;
};

const CardBody = ({ className, children }) => {
  const classes = `card-body ${className}`;
  return <div className={classes}>{children}</div>;
};

const CardFooter = ({ className, children }) => {
  const classes = `card-footer ${className}`;
  return <div className={classes}>{children}</div>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
