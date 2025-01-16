import './styles/Contact.css';

export default function Contact() {
    return (
        <div id='contato' className="flex flex-col justify-center items-center py-8 pb-14">
            <h1 className="text-5xl font-bold">Contato</h1>
            <form action="https://getform.io/f/akkkrnqa" method="POST" className="flex flex-col justify-center items-start gap-2 w-full">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="Digite seu nome e da sua empresa" required autoComplete="name" className='w-full' />

                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Digite um e-mail válido" required autoComplete="email" className='w-full' />

                <label htmlFor="phone">Telefone</label>
                <input type="text" name="phone" id="phone" placeholder="Digite um número para contato" required autoComplete="tel" className='w-full' />

                <label htmlFor="message">Mensagem</label>
                <textarea name="message" id="message" placeholder="Digite sua descrição aqui" required className='w-full'></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}