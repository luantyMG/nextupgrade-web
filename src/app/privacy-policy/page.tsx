export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 space-y-12">
      <h1 className="text-4xl font-bold text-zinc-400">Política de Privacidad</h1>

      <p className="text-zinc-400">
        Última actualización: {new Date().toLocaleDateString()}
      </p>

      <div className="space-y-8 text-zinc-400 leading-relaxed">

        {/* INTRODUCCIÓN */}
        <div className="space-y-4">
          <p>
            En <span className="text-white font-semibold">NextUpgrade</span> respetamos
            la privacidad de los usuarios y protegemos la información personal
            tratada a través de nuestra aplicación móvil{" "}
            <span className="text-white font-semibold">ConectED</span>.
          </p>

          <p>
            La Institución educativa que implementa ConectED es la responsable
            del tratamiento de los datos personales. NextUpgrade actúa
            exclusivamente como proveedor tecnológico y encargado del
            tratamiento.
          </p>
        </div>

        {/* INFORMACIÓN RECOPILADA */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            1. Información que puede recopilarse
          </h2>

          <p>
            ConectED puede procesar los siguientes datos, según lo determine
            la Institución:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Nombre completo</li>
            <li>Correo electrónico institucional</li>
            <li>Rol dentro de la institución</li>
            <li>Información académica</li>
            <li>Fotografía de perfil</li>
            <li>Tokens para notificaciones push</li>
            <li>Registros técnicos mínimos de seguridad</li>
          </ul>
        </div>

        {/* PERMISOS */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            Permisos del dispositivo
          </h2>

          <p>
            La aplicación ConectED puede solicitar permisos del dispositivo para
            ofrecer funcionalidades específicas:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Cámara: para capturar fotografías dentro de la aplicación</li>
            <li>Almacenamiento / galería: para seleccionar imágenes existentes</li>
            <li>Notificaciones: para enviar avisos en tiempo real</li>
          </ul>

          <p>
            Estos permisos se solicitan únicamente cuando son necesarios para el
            funcionamiento de la aplicación.
          </p>
        </div>

        {/* FINALIDAD */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            2. Finalidad del tratamiento
          </h2>

          <p>La información es utilizada exclusivamente para:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Gestión académica y administrativa</li>
            <li>Comunicación institucional</li>
            <li>Envío de notificaciones en tiempo real</li>
            <li>Control de acceso y autenticación</li>
            <li>Mejora continua del servicio</li>
          </ul>
        </div>

        {/* INFRAESTRUCTURA */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            3. Infraestructura y almacenamiento
          </h2>

          <p>
            Los servicios de backend y API pueden estar alojados en proveedores
            especializados de infraestructura en la nube.
          </p>

          <p>
            Las imágenes y archivos pueden almacenarse en servicios externos de
            almacenamiento en la nube que cumplen con estándares
            internacionales de seguridad.
          </p>

          <p>
            Para el funcionamiento de ciertas características, ConectED puede
            utilizar servicios de terceros como plataformas de notificaciones
            y servicios en la nube (por ejemplo, Firebase).
          </p>

          <p>
            NextUpgrade no vende, comercializa ni comparte datos personales
            con terceros con fines publicitarios.
          </p>
        </div>

        {/* MENORES */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            4. Menores de edad
          </h2>

          <p>
            Cuando los usuarios sean menores de edad, el tratamiento de datos
            se realizará bajo la autorización y supervisión de sus tutores
            legales y dentro del contexto educativo autorizado por la
            Institución.
          </p>
        </div>

        {/* SEGURIDAD */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            5. Seguridad de la información
          </h2>

          <p>
            Implementamos medidas técnicas y organizativas como:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Autenticación segura basada en tokens</li>
            <li>Encriptación de contraseñas</li>
            <li>Control de roles y permisos</li>
            <li>Protección de sesiones</li>
          </ul>

          <p>
            Sin embargo, ningún sistema digital es completamente infalible,
            por lo que no se puede garantizar seguridad absoluta.
          </p>
        </div>

        {/* DERECHOS */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            6. Derechos del usuario
          </h2>

          <p>
            Los usuarios pueden solicitar acceso, rectificación o eliminación
            de sus datos.
          </p>

          <p>Para eliminar su información, pueden:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Solicitarlo directamente a la institución educativa</li>
            <li>Contactar al correo de soporte indicado en esta política</li>
          </ul>
        </div>

        {/* CAMBIOS */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            7. Cambios a esta política
          </h2>

          <p>
            Nos reservamos el derecho de actualizar esta Política de Privacidad
            en cualquier momento. Se recomienda revisar periódicamente esta sección.
          </p>
        </div>

        {/* CONTACTO */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            8. Contacto
          </h2>

          <p>
            Para cualquier duda relacionada con esta Política de Privacidad,
            puede contactarnos en:
          </p>

          <p className="text-white font-medium">
            soporte@nextupgrade.com.mx
          </p>

          <p>México</p>
        </div>

      </div>
    </section>
  );
}