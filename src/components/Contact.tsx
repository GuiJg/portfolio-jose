import './styles/Contact.css';

export default function Contact() {
    return (
        <div id='contato' className="flex flex-col justify-center items-center py-8 pb-32">
            <h1 className="text-5xl font-bold">Contato</h1>
            <div className='p-4 form-container' style={{ width: "50rem" }}>
                <form action="https://getform.io/f/akkkrnqa" method="POST" className="flex flex-col justify-center items-start gap-2 w-full">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" placeholder="Digite seu nome e da sua empresa" required autoComplete="name" className='p-3 bg-transparent border border-gray-700 text-white focus:bg-slate-200 focus:text-black w-full transition-all' />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Digite um e-mail válido" required autoComplete="email" className='p-3 bg-transparent border border-gray-700 text-white focus:bg-slate-200 focus:text-black w-full transition-all' />

                    <label htmlFor="phone">Telefone</label>
                    <input type="text" name="phone" id="phone" placeholder="Digite um número para contato" required autoComplete="tel" className='p-3 bg-transparent border border-gray-700 text-white focus:bg-slate-200 focus:text-black w-full transition-all' />

                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="message" placeholder="Digite sua descrição aqui" required className='p-3 bg-transparent border border-gray-700 text-white focus:bg-slate-200 focus:text-black w-full h-48 transition-all'></textarea>

                    <button type="submit" className='p-3 bg-transparent border border-gray-700 text-white hover:bg-slate-200 hover:text-black w-full transition-all'>Enviar</button>
                </form>
            </div>
        </div>
    );
}