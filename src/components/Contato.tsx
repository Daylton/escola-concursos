import Image from "next/image";

export default function Contato() {
  return (
    <section id="contato" className="py-14 bg-primary-red text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Pronto para começar?</h2>
        <p className="text-xl mb-8">Entre em contato conosco</p>
        <button className="bg-white text-primary-red font-bold py-2 px-4 rounded hover:bg-gray-800 hover:text-white">
          <a href="https://wa.me/55999999999999">Entre em contato</a>
        </button>
        <div className="mb-8 mt-8">
          <h3 className="text-2xl font-bold">Onde estamos:</h3>
          <p>Rua de exemplo, 1234, Centro, São Paulo</p>
        </div>
        <div className="mb-8 mx-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3533661191686!2d-46.69284021324983!3d-23.591656707975066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574f65e65563%3A0x90e6f24d87410937!2sGoogle%20S%C3%A3o%20Paulo%20-%20S%C3%A3o%20Paulo%20Corporate%20Towers!5e0!3m2!1sen!2sbr!4v1732060760946!5m2!1sen!2sbr"
            loading="lazy"
            className="w-full h-96"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Telefone:</h3>
          <p>(33) 3333-3333</p>
          <h3 className="text-2xl font-bold ">
            Whatsapp:
          </h3>
          <p className="hover:text-secondary-red">
            <a href="https://wa.me/55999999999999">(99) 9 9999-9999</a>
          </p>
          <h3 className="text-2xl font-bold">Email:</h3>
          <p>contato@escolaconcursos.com.br</p>
          <h3 className="text-2xl font-bold mt-4">Redes sociais</h3>
          <a
            href="https://www.instagram.com/escola_concursos"
            className="hover:text-secondary-red flex justify-center items-center"
            target="_blank"
          >
            <Image
              src="/instagram-png.png"
              alt="Instagram"
              width={30}
              height={30}
            />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
