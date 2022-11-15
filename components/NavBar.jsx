import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faUserGroup,
  faMagnifyingGlass,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <Link href={"/"} className="nav-item">
        <FontAwesomeIcon
          icon={faHouse}
          style={{ height: "1.5rem", width: "1.5rem" }}
        />
        <span>GaMinth</span>
      </Link>
      <Link href={"/"} className="nav-item">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ height: "1.5rem", width: "1.5rem" }}
        />
        <span>Rechercher</span>
      </Link>
      <Link href={"/"} className="nav-item">
        <FontAwesomeIcon
          icon={faCircleInfo}
          style={{ height: "1.5rem", width: "1.5rem" }}
        />
        <span>Infos</span>
      </Link>
      <Link href={"/"} className="nav-item">
        <FontAwesomeIcon
          icon={faUserGroup}
          style={{ height: "1.5rem", width: "1.5rem" }}
        />
        <span>Social</span>
      </Link>
    </nav>
  );
};

export default NavBar;
