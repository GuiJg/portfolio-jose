import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Projects from "./components/Projects";

export default function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <header className="flex justify-between align-center p-6 fixed w-full bg-black z-50">
        <Link to={'/'} className="flex">
          <h1 className="text-3xl font-bold uppercase">José Guilherme</h1>
        </Link>
        <nav className="hidden sm:flex justify-center align-center gap-8 ">
          <a href='#' className="flex justify-center items-center text-gray-300 font-normal hover:underline">Inicio</a>
          <a href='#sobre' className="flex justify-center items-center text-gray-300 font-normal hover:underline">Sobre</a>
          <a href='#projetos' className="flex justify-center items-center text-gray-300 font-normal hover:underline">Projetos</a>
          <a href='#contato' className="flex justify-center items-center text-gray-300 font-normal hover:underline">Contato</a>
          <a
            href="./assets/Currículo - José Guilherme.pdf"
            download="Currículo - José Guilherme.pdf"
            rel="noreferrer" className="flex justify-center items-center text-gray-300 font-normal hover:underline"
          >
            Download CV
          </a>
        </nav>
      </header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
      </Routes>

      <button
        className="bg-white rounded-full p-2 fixed bottom-8 right-8 hover:bg-slate-300"
        onClick={scrollToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g transform="rotate(-90 12 12) translate(24 0) scale(-1 1)"><g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="14" strokeDashoffset="14" d="M19 12H5.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="14;0" /></path><path strokeDasharray="8" strokeDashoffset="8" d="M5 12L10 17M5 12L10 7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0" /></path></g></g></svg>
      </button>

      <footer className="flex justify-center items-center gap-6 p-6 bg-black">
        <p className="text-center text-gray-300">Desenvolvido por <strong>José Guilherme</strong></p>
        <div className="flex justify-center items-center gap-4">
          <a href="https://www.linkedin.com/in/j-gui/" target="_blank" rel="noreferrer">
            <i className="pi pi-linkedin text-2xl hover:text-blue-600 hover:-translate-y-1 transition-all"></i>
          </a>
          <a href="https://github.com/GuiJg" target="_blank" rel="noreferrer">
            <i className="pi pi-github text-2xl hover:text-gray-500 hover:-translate-y-1 transition-all"></i>
          </a>
          <a href="https://wa.me/5581986927127" target="_blank" rel="noreferrer">
            <i className="pi pi-whatsapp text-2xl hover:text-green-500 hover:-translate-y-1 transition-all"></i>
          </a>
        </div>
      </footer>
    </>
  )
}
