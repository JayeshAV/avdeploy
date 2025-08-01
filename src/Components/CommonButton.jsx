import { Link } from "react-router-dom";

const CommonButton = ({
  children,
  className,
  type = "button",
  onClick,
  style,
  isDisabled,
  to, // 👈 ADD THIS for link support
  ...args
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`common-btn ${className}`}
        onClick={onClick}
        style={style}
        {...args}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`common-btn ${className}`}
      onClick={onClick}
      style={style}
      disabled={isDisabled}
      {...args}
    >
      {children}
    </button>
  );
};

export default CommonButton;
