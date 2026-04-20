export default function PrivacyPolicy() {
  const lastUpdate = new Date().toLocaleDateString("es-MX");

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 space-y-12">
      <h1 className="text-4xl font-bold text-zinc-400">
        Política de Privacidad
      </h1>

      <p className="text-zinc-400">
        Última actualización: {lastUpdate}
      </p>

      <div className="space-y-8 text-zinc-400 leading-relaxed">

        {/* INTRODUCCIÓN */}
        <div className="space-y-4">
          <p>
            En <span className="text-white font-semibold">NextUpgrade</span>{" "}
            respetamos la privacidad de los usuarios y protegemos la
            información personal tratada a través de nuestra aplicación móvil{" "}
            <span className="text-white font-semibold">ConectED</span>.
          </p>

          <p>
            La institución educativa responsable de ConectED es la encargada
            del tratamiento de los datos personales. NextUpgrade actúa como
            proveedor tecnológico.
          </p>
        </div>

        {/* DATOS */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            1. Información que recopilamos
          </h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Nombre completo</li>
            <li>Correo electrónico institucional</li>
            <li>Rol dentro de la institución</li>
            <li>Información académica</li>
            <li>Fotografía de perfil</li>
            <li>Tokens de notificaciones push</li>
            <li>Datos técnicos de uso</li>
          </ul>
        </div>

        {/* PERMISOS */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            Permisos del dispositivo
          </h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Cámara: para capturar imágenes dentro de la app</li>
            <li>Galería: para seleccionar imágenes</li>
            <li>Notificaciones: para alertas en tiempo real</li>
          </ul>

          <p>
            Los permisos solo se usan cuando son necesarios para la
            funcionalidad de la aplicación.
          </p>
        </div>

        {/* FINALIDAD */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            2. Uso de la información
          </h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Gestión académica</li>
            <li>Comunicación institucional</li>
            <li>Notificaciones</li>
            <li>Autenticación de usuarios</li>
          </ul>
        </div>

        {/* TERCEROS */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            3. Servicios de terceros
          </h2>

          <p>
            Utilizamos servicios de infraestructura en la nube como Firebase u
            otros proveedores para almacenamiento y notificaciones.
          </p>

          <p>
            No vendemos ni compartimos datos personales con fines comerciales.
          </p>
        </div>

        {/* MENORES */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            4. Menores de edad
          </h2>

          <p>
            El uso de la aplicación por menores de edad se realiza bajo
            supervisión de la institución educativa y sus tutores legales.
          </p>
        </div>

        {/* SEGURIDAD */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            5. Seguridad
          </h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Autenticación segura</li>
            <li>Encriptación de contraseñas</li>
            <li>Control de accesos</li>
          </ul>

          <p>
            Ningún sistema es 100% seguro, pero aplicamos medidas razonables
            para proteger la información.
          </p>
        </div>

        {/* DERECHOS */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            6. Derechos del usuario
          </h2>

          <p>
            Los usuarios pueden solicitar acceso, corrección o eliminación de
            sus datos a través de la institución educativa o soporte.
          </p>

          <p className="text-white font-medium">
            soporte@nextupgrade.com.mx
          </p>
        </div>

        {/* CAMBIOS */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">
            7. Cambios a esta política
          </h2>

          <p>
            Esta política puede actualizarse en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
}