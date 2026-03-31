export default function Terms() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 space-y-12">
      <h1 className="text-4xl font-bold ">Términos y Condiciones</h1>

      <p className="text-zinc-400">
        Última actualización: {new Date().toLocaleDateString()}
      </p>

      <div className="space-y-8 text-zinc-400 leading-relaxed">

        {/* INTRODUCCIÓN */}
        <div className="space-y-4">
          <p>
            El uso de la aplicación móvil{" "}
            <span className="text-white font-semibold">ConectED</span>,
            desarrollada por{" "}
            <span className="text-white font-semibold">NextUpgrade</span>,
            implica la aceptación de los presentes Términos y Condiciones.
          </p>

          <p>
            La Institución educativa que implemente la plataforma será
            responsable de la administración, configuración y contenido
            gestionado dentro del sistema.
          </p>
        </div>

        {/* OBJETO */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            1. Objeto del Servicio
          </h2>

          <p>
            ConectED es una plataforma tecnológica de gestión académica
            y comunicación institucional que permite la consulta de
            información escolar, envío de notificaciones, reportes
            y herramientas administrativas internas.
          </p>
        </div>

        {/* USO AUTORIZADO */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            2. Uso Autorizado
          </h2>

          <p>
            El acceso está limitado a usuarios autorizados por la
            Institución correspondiente.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Está prohibido compartir credenciales de acceso.</li>
            <li>No se permite suplantar identidades.</li>
            <li>No se permite manipular información académica.</li>
            <li>No se permite intentar vulnerar la seguridad del sistema.</li>
          </ul>
        </div>

        {/* INFRAESTRUCTURA */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            3. Infraestructura Tecnológica
          </h2>

          <p>
            Los servicios de backend y API pueden estar alojados en
            proveedores especializados de infraestructura en la nube.
          </p>

          <p>
            Las imágenes y archivos pueden almacenarse en servicios
            externos de almacenamiento en la nube que cumplen con
            estándares internacionales de seguridad.
          </p>
        </div>

        {/* RESPONSABILIDAD */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            4. Responsabilidad del Contenido
          </h2>

          <p>
            Toda la información académica, reportes, avisos o datos
            institucionales es generada y administrada exclusivamente
            por la Institución.
          </p>

          <p>
            NextUpgrade actúa únicamente como proveedor tecnológico
            y no valida ni modifica el contenido ingresado por la
            Institución.
          </p>
        </div>

        {/* LIMITACIÓN */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            5. Limitación de Responsabilidad
          </h2>

          <p>
            NextUpgrade no será responsable por:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Fallos derivados de conectividad o dispositivos.</li>
            <li>Errores humanos de la Institución.</li>
            <li>Uso indebido de cuentas por parte de los usuarios.</li>
            <li>Interrupciones de servicios de terceros.</li>
          </ul>

          <p>
            En cualquier caso, la responsabilidad total de NextUpgrade
            se limitará al monto efectivamente pagado por la Institución
            durante los últimos doce meses.
          </p>
        </div>

        {/* PROPIEDAD */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            6. Propiedad Intelectual
          </h2>

          <p>
            El software, diseño, arquitectura técnica y código fuente
            de ConectED son propiedad exclusiva de NextUpgrade.
          </p>

          <p>
            Queda prohibida su reproducción, modificación o ingeniería
            inversa sin autorización expresa.
          </p>
        </div>

        {/* MODIFICACIONES */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            7. Modificaciones
          </h2>

          <p>
            NextUpgrade podrá actualizar estos términos cuando sea
            necesario.
          </p>

          <p>
            Las modificaciones serán publicadas en esta página con
            su fecha de actualización correspondiente.
          </p>
        </div>

      </div>
    </section>
  );
}