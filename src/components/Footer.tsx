import "./estilos/footer.css";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="footercontainer">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <p className="text-xs mt-2">Built with ❤️ using React.</p>
      </div>
    </footer>
  );
}
