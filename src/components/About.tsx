import profile from "../assets/profile.png";

export default function About() {
    return (
        <div className="flex flex-wrap justify-center items-start gap-16" id="sobre">
            <div className="w-64">
                <img src={profile} alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start gap-6 p-8" style={{ width: "50rem" }}>
                <h2 className="text-5xl font-bold">
                    Desenvolvendo <strong className="bg-gradient-to-r from-cyan-700 to-blue-500">solução de software</strong>, com o foco na qualidade e na experiencia do usuario.
                </h2>
                <p className="text-lg">
                    Graduado em Análise e Desenvolvimento de sistemas pela Universidade Estácio de Sá, tive experência profissional na área recentemente trabalhando como estágiario de desenvolvimento de software front-end. Tenho conhecimento dos frameworks presentes no mercado como angular.js e react.js. Estudo diariamente para evoluir no mercado de trabalho tecnológico que sou apaixonado! Também Trago experiências valiosas do meu trabalho independente como freelancer.
                </p>
                <div className="flex flex-col gap-7">
                    <span className="text-2xl font-bold">
                        Experiência
                    </span>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <span className="text-lg font-bold border-b-2">
                                Lumos Studio - Desenvolvedor Front-end - Freelancer
                            </span>
                            <p>Fevereiro de 2024 - Atualmente</p>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold border-b-2">
                                TX Technology - Desenvolvedor Front-end - Estágio
                            </span>
                            <p>Agosto de 2024 - Dezembro de 2024</p>
                        </div>
                    </div>
                </div>
                <a
                    href="./assets/Currículo - José Guilherme.pdf"
                    download="Currículo - José Guilherme.pdf"
                    rel="noreferrer" className="flex justify-center items-center p-1 px-2 bg-white rounded text-black font-normal hover:bg-slate-300 active:bg-slate-400 transition-all"
                >
                    Download CV
                </a>
            </div>
        </div>
    );
}