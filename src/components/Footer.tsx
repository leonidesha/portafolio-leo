import "./estilos/footer.css";
export default function Footer() {
  return (
    <footer id="about" className="bg-gray-800 text-white py-4">
      <div className="footercontainer">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <a href="#home">Ir arriba</a>
      </div>
    </footer>
  );
}
