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
  }

  return (
    <>
      <header className="flex justify-between align-center p-6 fixed w-full bg-black z-50">
        <Link to={'/'} className="flex">
          <h1 className="text-3xl font-bold uppercase">José Guilherme</h1>
        </Link>
        <nav className="flex justify-center align-center gap-8 ">
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
        className="scroll-top"
        onClick={scrollToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g transform="rotate(-90 12 12) translate(24 0) scale(-1 1)"><g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="14" strokeDashoffset="14" d="M19 12H5.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="14;0" /></path><path strokeDasharray="8" strokeDashoffset="8" d="M5 12L10 17M5 12L10 7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0" /></path></g></g></svg>
      </button>

      <footer className="flex justify-center items-center gap-6 p-6 bg-black">
        <p className="text-center text-gray-300">Desenvolvido por <strong>José Guilherme</strong></p>
        <div className="flex justify-center items-center gap-4">
          <a href="https://www.linkedin.com/in/j-gui/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} viewBox="0 0 128 128">
              <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"></path>
              <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
            </svg>
          </a>
          <a href="https://github.com/GuiJg" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} viewBox="0 0 256 256">
              <g fill="none">
                <rect width={128} height={128} fill="#242938" rx={60}></rect>
                <path fill="#fff" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"></path>
              </g>
            </svg>
          </a>
          <a href="https://wa.me/5581986927127" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} viewBox="0 0 256 258">
              <defs>
                <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
                  <stop offset="0%" stopColor="#1faf38"></stop>
                  <stop offset="100%" stopColor="#60d669"></stop>
                </linearGradient>
                <linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
                  <stop offset="0%" stopColor="#f9f9f9"></stop>
                  <stop offset="100%" stopColor="#fff"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"></path>
              <path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"></path>
              <path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"></path>
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}