import Link from "next/link";



type FocusPoint = {
  color: string;
  text: string;
};

interface FocusCardProps {
  points: FocusPoint[];
}

// Glow de fondo animado
function BackgroundEffects() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6C63FF]/20 blur-3xl rounded-full -translate-x-1/4 -translate-y-1/4 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D1FF]/20 blur-3xl rounded-full translate-x-1/4 translate-y-1/4 animate-float animation-delay-2000"></div>
    </div>
  );
}

// Contenido izquierdo
function LeftContent() {
  return (
    <div className="space-y-10">
      <span className="text-xs uppercase tracking-[0.3em] text-[#A1A1A1]">
        Software Development Company
      </span>

      <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
        Construimos
        <br />
        <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D1FF] to-[#6C63FF] bg-clip-text text-transparent">
          soluciones digitales
        </span>
        <br />
        que transforman instituciones.
      </h1>

      <p className="text-[#A1A1A1] text-lg max-w-xl leading-relaxed">
        En <span className="text-white font-medium">NextUpgrade</span> desarrollamos plataformas modernas, seguras y escalables. Creamos tecnología con impacto real, como <span className="text-white font-medium">ConectED</span>.
      </p>

      <div className="flex flex-wrap gap-6 pt-4">
        <Link
          href="/connected"
          className="group px-8 py-3 bg-gradient-to-r from-[#6C63FF] via-[#00D1FF] to-[#6C63FF] text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
        >
          Conocer ConectED
          <span className="inline-block ml-2 transition-transform duration-500 group-hover:translate-x-3">
            →
          </span>
        </Link>

        <Link
          href="/contact"
          className="px-8 py-3 border border-[#2C2F3B] rounded-xl hover:border-[#6C63FF] hover:bg-[#6C63FF]/10 text-white transition-all duration-300"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}

// Card enfoque tipado
function FocusCard({ points }: FocusCardProps) {
  return (
    <div className="relative bg-[#1A1C23]/70 backdrop-blur-2xl border border-[#2C2F3B] rounded-3xl p-14 shadow-2xl shadow-black/50 flex flex-col items-start mt-24 md:mt-0 transform transition-transform duration-500 hover:scale-105">
      <h3 className="text-xl font-semibold mb-8 text-white tracking-wide">
        Nuestro enfoque
      </h3>

      <ul className="space-y-5 text-[#A1A1A1] text-sm">
        {points.map((point: FocusPoint, idx: number) => (
          <li
            key={idx}
            className="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-1"
          >
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: point.color }}></span>
            {point.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Contenido derecho
function RightContent() {
  const points: FocusPoint[] = [
    { color: "#6C63FF", text: "Arquitectura escalable" },
    { color: "#00D1FF", text: "Seguridad avanzada" },
    { color: "#6C63FF", text: "Experiencia centrada en el usuario" },
    { color: "#00D1FF", text: "Tecnología moderna" },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center md:items-start gap-10">
      <FocusCard points={points} />
    </div>
  );
}

// Componente principal
export default function Home() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <BackgroundEffects />

      <div className="relative grid md:grid-cols-2 gap-10 md:gap-20 items-center w-full max-w-7xl mx-auto px-8 py-28">
        <LeftContent />
        <RightContent />
      </div>
    </section>
  );
}