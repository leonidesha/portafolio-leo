import "./estilos/main.css";
export default function Main() {
  return (
    <>
      <div>
        <p id="home">
          Aquí encontrará información sobre mis trabajos como desarrollador web
        </p>
        <section id="personal">
          <h3>Breve descripción sobre mi</h3>
          <p>
            Mi nombre es Leonides Hidalgo Alvarez, tengo 30 años, vivo en Cuba,
            soy un desarrollador web junior
          </p>
        </section>
        <section id="habilidades">
          <h3>Habilidades</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Typescript</li>
            <li>Git</li>
          </ul>
        </section>
        <section id="proyectos">
          <h3>Proyectos</h3>
          <ul>
            <li>Página web para un bar local</li>
            <li>Aplicación de gestión de tareas</li>
            <li>Portafolio personal</li>
          </ul>
          <p>
            Todos los proyectos puede encontrarlos en mi{" "}
            <a href="https://github.com/leonidesha">github</a>
          </p>
        </section>
        <p id="contact">
          Puede comunicarse conmigo por{" "}
          <a href="https://api.whatsapp.com/send?phone=5358943924&text=Hola">
            Whatsapp
          </a>
        </p>
      </div>
    </>
  );
}
