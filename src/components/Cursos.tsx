import Image from "next/image";

const cursos = [
  {
    id: 1,
    nome: "Curso preparatório Concurso",
    descricao:
      "Este curso é indicado para profissionais que desejam se preparar para concursos",
    imagem: "/curso1.png",
  },
  {
    id: 2,
    nome: "Curso preparatório Concurso",
    descricao:
      "Este curso é indicado para profissionais que desejam se preparar para concursos",
    imagem: "/curso2.png",
  },
  {
    id: 3,
    nome: "Curso preparatório Concurso",
    descricao:
      "Este curso é indicado para profissionais que desejam se preparar para concursos",
    imagem: "/curso3.png",
  },
];

export default function Cursos() {
  return (
    <section id="cursos" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary-red">
          Próximos Curos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="bg-white flex flex-col p-6 rounded-lg shadow-md"
            >
              <Image
                src={curso.imagem}
                alt={curso.nome}
                width={400}
                height={200}
                className="rounded-md mb-4 object-cover w-auto"
              />
              <h3 className="text-2xl font-bold mb-2 h-14 text-primary-red">{curso.nome}</h3>
              <p className="h-24 text-xl">{curso.descricao}</p>
              <button className="bg-primary-red text-white font-bold py-2 px-4 rounded mt-4 mb-0 hover:bg-secondary-red">
                <a href="https://wa.me/5599999999999">Saiba mais</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
