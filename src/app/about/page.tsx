export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 space-y-16">

      {/* HERO */}
      <div className="space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Impulsamos el futuro digital de la educación
        </h1>

        <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          En <span className="text-white font-semibold">NextUpgrade</span> desarrollamos
          soluciones tecnológicas modernas enfocadas en transformar la gestión
          educativa y fortalecer la comunicación institucional.
        </p>
      </div>

      {/* QUIÉNES SOMOS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          ¿Quiénes somos?
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          NextUpgrade es una iniciativa tecnológica especializada en el
          desarrollo de plataformas digitales para instituciones educativas.
          Nuestro enfoque combina arquitectura moderna en la nube,
          experiencia de usuario intuitiva y altos estándares de seguridad.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          Creemos que la educación necesita herramientas digitales
          eficientes, seguras y bien diseñadas para enfrentar los
          desafíos actuales.
        </p>
      </div>

      {/* PRODUCTO PRINCIPAL */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Nuestro Producto
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          <span className="text-white font-semibold">ConectED</span> es nuestra
          plataforma principal: una aplicación móvil y sistema web diseñado
          para mejorar la comunicación entre directivos, docentes,
          administrativos, estudiantes y tutores.
        </p>

        <ul className="list-disc list-inside space-y-2 text-zinc-400">
          <li>Gestión académica digital</li>
          <li>Notificaciones en tiempo real</li>
          <li>Control de roles y permisos</li>
          <li>Infraestructura segura en la nube</li>
          <li>Arquitectura escalable tipo SaaS</li>
        </ul>
      </div>

      {/* ENFOQUE TECNOLÓGICO */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Tecnología y Seguridad
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          Nuestras soluciones utilizan infraestructura en la nube,
          APIs modernas, autenticación segura y almacenamiento protegido,
          garantizando estabilidad, escalabilidad y protección de datos.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          Diseñamos sistemas pensados para crecer junto con las instituciones.
        </p>
      </div>

      {/* MISIÓN */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Nuestra Misión
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          Modernizar la gestión educativa mediante soluciones digitales
          confiables, intuitivas y accesibles que faciliten la toma
          de decisiones y fortalezcan la comunicación institucional.
        </p>
      </div>

      {/* VISIÓN */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Nuestra Visión
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          Convertirnos en un referente regional en soluciones tecnológicas
          educativas, aportando innovación, eficiencia y transformación digital
          a cada institución que confíe en nosotros.
        </p>
      </div>

    </section>
  );
}