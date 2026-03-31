import Link from "next/link";
import Image from "next/image";
import ImagenConedTED from "../../assets/images/bussines/ConeDark.png";

export default function Connected() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 space-y-20">

      {/* HERO */}
      <div className="flex flex-col items-center text-center space-y-10 max-w-3xl mx-auto">

        {/* Logo Circular Premium */}
        <div className="relative">

          {/* Glow sutil */}
          <div className="absolute inset-0 bg-purple-600/20 blur-2xl rounded-full"></div>

          {/* Círculo contenedor */}
          <div className="relative w-40 h-40 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-xl">
            <Image
              src={ImagenConedTED}
              alt="ConectED Logo"
              className="w-28 h-28 object-contain"
              priority
            />
          </div>

        </div>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-400">
          ConectED
        </h1>

        <p className="text-xl text-zinc-400 leading-relaxed">
          Plataforma institucional de comunicación y control escolar
          diseñada para centralizar información, generar evidencia y
          fortalecer la relación entre estudiantes, tutores y docentes.
        </p>

        <div>
          <span className="inline-block text-sm text-zinc-500 border border-zinc-800 px-4 py-2 rounded-md">
            Próximamente disponible en Google Play
          </span>
        </div>

      </div>

      {/* PROBLEMA / CONTEXTO */}
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-medium">El problema</h2>
          <p className="text-zinc-400 leading-relaxed">
            Muchas instituciones educativas operan con procesos manuales,
            comunicación fragmentada y poca visibilidad académica para los tutores.
            Esto genera desinformación, conflictos innecesarios y pérdida de confianza.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-medium">La solución</h2>
          <p className="text-zinc-400 leading-relaxed">
            ConectED centraliza la información académica, automatiza procesos
            clave y establece un canal oficial y verificable de comunicación
            institucional.
          </p>
        </div>
      </div>

      {/* FUNCIONALIDADES */}
      <div className="space-y-10">
        <h2 className="text-3xl font-semibold">Características clave</h2>

        <div className="grid md:grid-cols-2 gap-10 text-zinc-400">

          <div className="space-y-3">
            <h3 className="text-white font-medium">Comunicación oficial</h3>
            <p>
              Avisos en tiempo real, notificaciones push y registro histórico
              de comunicaciones institucionales.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-medium">Control académico</h3>
            <p>
              Registro de asistencias, seguimiento académico y acceso
              estructurado a información relevante.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-medium">Buzón institucional</h3>
            <p>
              Sistema digital de quejas y sugerencias con seguimiento,
              transparencia y documentación formal.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-medium">Seguridad avanzada</h3>
            <p>
              Autenticación JWT, control de roles y permisos personalizados
              para garantizar acceso seguro a la información.
            </p>
          </div>

        </div>
      </div>

      {/* IMPACTO */}
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-3xl font-semibold">Impacto institucional</h2>
        <p className="text-zinc-400 leading-relaxed">
          ConectED no digitaliza problemas: los ordena, los documenta y
          los hace visibles para resolverlos. Mejora la transparencia,
          fortalece la disciplina institucional y genera mayor confianza
          entre la comunidad educativa.
        </p>
      </div>

      {/* CTA FINAL */}
      <div className="pt-10">
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-zinc-200 transition"
        >
          Solicitar información
        </Link>
      </div>

    </section>
  );
}