import "./estilos/header.css";
export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="headercontainer">
        <h1 className="text-lg">Bienvenido</h1>
        <nav>
          <ul className="flexnav">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
