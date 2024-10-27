export interface BandMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export const bandMembers: BandMember[] = [
  {
    name: "Juan Nigrum",
    role: "Vocalista",
    description: "Antiguo cantante de “La Skala de Richter” y actualmente vocalista de la banda metal Anhedonia, sorprende verlo en cualquier registro, desde el flamenco más profundo hasta el pop rock ",
    image: "/images/singer.jpg"
  },
  {
    name: "José Lamarca",
    role: "Guitarrista",
    description: "Desde muy joven se consideró un enamorado del Rock&roll y del sonido vintage más auténtico, pasando por ACDC y llegando al rock de “Los Zigarros”. Tiene claro que, combinado con el olor a válvula ardiendo, el sonido de un Marshall crujiente y una strato de la época, dan vida a esa etapa ochentera que tanto nos marcó. De hecho, también forma parte de “Demure”.",
    image: "/images/guitarist.jpg"
  },
  {
    name: "David Meier",
    role: "Bajista",
    description: "David se incorporó al grupo en 2023.Siempre ha estado muy relacionado con la música y con solo verlo tocar sabes la experiencia que lleva consigo. Actualmente, también trabaja con “Demure”, un trio de Jazz y forma parte de la misma Big Band que Cholo. Amante de la variedad musical, de igual forma sabe colgarse la guitarra y hacerla sonar.",
    image: "/images/bassist.jpg"
  },
  {
    name: "Xolo",
    role: "Baterista",
    description: "Aunque no os lo creáis, Cholo empezó desde muy pequeño con el Bajo. De hecho, en su adolescencia formó parte de un grupo de Metal de Macael llamado “Devil Kam” con el cual tuvo la suerte de grabar una maqueta y ser uno de los finalistas del concurso de maquetas del programa de radio y web “Belladurmiente”. Muy pegado a Pepe desde pequeño, sus gustos musicales son muy parecidos, aunque tiene claro que en la variedad esta la sabiduría. Ama el Funk y el Metal, pero no descarta el Blues ni el Jazz.",
    image: "/images/drummer.jpg"
  }
];