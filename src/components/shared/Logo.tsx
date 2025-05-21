import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-28 h-10" />
      </Link>
    </div>
  );
};

export default Logo;
