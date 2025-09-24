import { cn } from "../../utils/cn";

const Button = ({ children, className, type, onClick }) => {
  return (
    <button
      className={cn("btn rounded-pill", className)}
      type={type ? type : ""}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
