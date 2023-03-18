import Image from "mui-image";
import logo from "../../images/myanimelist-logo.webp";

const Logo = ({ width }) => {
  return <Image src={logo} fit="contain" width={width} />;
};

export default Logo;
