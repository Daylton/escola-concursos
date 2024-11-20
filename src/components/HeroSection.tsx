import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="h-screen">
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
        <Image
          src="/logo.png"
          alt="Escola Concursos"
          width={300}
          height={300}
          className="mb-8"
          priority
        />
        <h2 className="text-5xl font-bold text-primary-red">
          Prepare-se para o seu futuro
        </h2>
        <p className="text-2xl mt-4 px-1">
          Cursos preparatórios para concursos com alta taxa de aprovação
        </p>
        <button className="mt-8 bg-primary-red hover:bg-secondary-red text-white font-bold py-2 px-4 rounded">
          <a href="#cursos">Confira Nossos Cursos</a>
        </button>
      </div>
    </section>
  );
}
