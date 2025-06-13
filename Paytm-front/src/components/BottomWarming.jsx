import { Link } from "react-router-dom";

const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className="text-sm flex justify-center py-4">
      <div>{label}</div>
      <Link to={to} className="pl-1 underline cursor-pointer">
        {buttonText}
      </Link>
    </div>
  );
};

export default BottomWarning;
