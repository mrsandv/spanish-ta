import Image from "next/image";
import Link from "next/link";

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses & Prices", path: "/courses" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Registration", path: "/register" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Image fill src="/logo.png" alt="Logo Spanish-TA" />
      </div>
      <div className="navbar__menu">
        {menu.map((item) => (
          <Link key={item.name} href={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
