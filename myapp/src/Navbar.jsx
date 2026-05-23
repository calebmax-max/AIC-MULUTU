import { Link, useLocation } from "react-router-dom";
import { C, S } from "./styles";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Sermons", path: "/sermons" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav style={S.navbar}>
      <Link to="/" style={S.brand}>
        <div style={S.logoCircle}>AIC</div>
        AIC Mulutu Township
      </Link>
      <ul style={S.navLinks}>
        {NAV_ITEMS.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              style={
                pathname === item.path
                  ? { ...S.navLink, ...S.navLinkActive }
                  : S.navLink
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}