// Icons
import { sentrySnippet } from "@/shared/sentry.snippet";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Doc = () => {
  return (
    <section id="doc" className="p-9 flex flex-col gap-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Instalación y Configuración de{" "}
        <code className="bg-gray-200 px-2 py-1 rounded">@sentry-pkg/pkg</code>
      </h2>

      <p className="text-lg text-gray-700 mb-8">
        Aquí te explicamos cómo integrar y usar el paquete{" "}
        <code className="bg-gray-200 px-2 py-1 rounded">@sentry-pkg/pkg</code>{" "}
        en tu proyecto, incluyendo su instalación y configuración en un entorno
        NestJS.
      </p>

      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Instalación del Paquete
        </h3>
        <p className="text-gray-700 mb-4">
          Para empezar, instala el paquete usando npm:
        </p>
        <div className="text-white p-4 rounded-lg overflow-x-auto mb-6">
          <SyntaxHighlighter language="bash" style={a11yLight}>
            {`npm i @sentry-pkg/pkg`}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Modo de Uso
        </h3>
        <p className="text-gray-700 mb-4">
          Antes de usar el paquete, es{" "}
          <strong className="font-bold text-purple-600">
            crucial inicializarlo
          </strong>{" "}
          para que genere el par de claves (pública y privada) que necesita,
          usando el algoritmo RSA. Ejecuta el siguiente comando en tu terminal:
        </p>
        {/*<div className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6"> */}
        <div className="text-white p-4 rounded-lg overflow-x-auto mb-6">
          <SyntaxHighlighter language="bash" style={a11yLight}>
            {`npx @sentry-pkg/pkg --init`}
          </SyntaxHighlighter>
        </div>

        <h4 className="text-xl font-medium text-gray-800 mb-3">
          Parámetros de Inicialización
        </h4>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li className="mb-2">
            <code className="bg-gray-200 px-2 py-1 rounded">--force</code>: Usa
            este parámetro si necesitas forzar la inicialización. Esto generará
            o reemplazará el par de claves RSA existente.
          </li>
        </ul>
      </div>

      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Integración con NestJS
        </h3>
        <p className="text-gray-700 mb-4">
          La integración de{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">@sentry-pkg/pkg</code>{" "}
          en NestJS es más sencilla gracias a su módulo dedicado,{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">SentryModule</code>.
          Este módulo maneja la lógica de inicialización y hace que las
          funcionalidades del paquete estén disponibles en toda tu aplicación.
        </p>

        <h4 className="text-xl font-medium text-gray-800 mb-3">
          Configuración con{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">
            SentryModule.forRoot()
          </code>
        </h4>
        <p className="text-gray-700 mb-4">
          El método{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">forRoot()</code> es
          una convención común en NestJS para configurar módulos dinámicos.
          Permite que el{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">SentryModule</code> se
          configure con opciones específicas cuando lo importas en el módulo
          raíz de tu sistema (por ejemplo,{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">AppModule</code>).
        </p>

        <p className="text-gray-700 mb-4">
          Aquí tienes un ejemplo de cómo configurar el{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">SentryModule</code>{" "}
          con opciones:
        </p>
        <div className="text-white p-4 rounded-lg overflow-x-auto mb-6">
          <SyntaxHighlighter language="typescript" style={a11yLight}>
            {sentrySnippet.full_module}
          </SyntaxHighlighter>
        </div>
        <p className="text-gray-700 mb-4">
          <strong className="font-bold">Ten en cuenta:</strong> Los parámetros
          de configuración son <strong className="font-bold">opcionales</strong>
          . Si no necesitas configurar opciones específicas al inicio, puedes
          importar el módulo sin ellos:
        </p>
        <div className="text-white p-4 rounded-lg overflow-x-auto mb-6">
          <SyntaxHighlighter language="typescript" style={a11yLight}>
            {sentrySnippet.simple_module}
          </SyntaxHighlighter>
          <pre>
            <code className="language-typescript"></code>
          </pre>
        </div>
        <h4 className="text-xl font-medium text-gray-800 mb-3">
          Opciones de Configuración{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">SentryOptions</code>
        </h4>
        {/* TABLE BEGINS */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Opción
                </th>
                <th scope="col" className="px-6 py-3">
                  Tipo
                </th>
                <th scope="col" className="px-6 py-3">
                  Valor por defecto
                </th>
                <th scope="col" className="px-6 py-3">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <code className="bg-gray-200 px-2 py-1 rounded">
                    expiresIn
                  </code>
                </th>
                <td className="px-6 py-4">
                  <code className="bg-gray-200 px-2 py-1 rounded">string</code>
                  <code className="bg-gray-200 px-2 py-1 rounded">number</code>
                </td>
                <td className="px-6 py-4">
                  <code className="bg-gray-200 px-2 py-1 rounded">1m</code> (un
                  minuto)
                </td>
                <td className="px-6 py-4">
                  <code className="bg-gray-200 px-2 py-1 rounded">1s</code>
                  <code className="bg-gray-200 px-2 py-1 rounded">1m</code>
                  <code className="bg-gray-200 px-2 py-1 rounded">5h</code>
                  <code className="bg-gray-200 px-2 py-1 rounded">30d</code>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <code className="bg-gray-200 px-2 py-1 rounded">
                    databaseOptions
                  </code>
                </th>
                <td className="px-6 py-4">
                  <code className="bg-gray-200 px-2 py-1 rounded">
                    databaseOptions
                  </code>
                </td>
                <td className="px-6 py-4">La data se guarda en memoria</td>
                <td className="px-6 py-4">
                  Credenciales para la conexión a una base de datos{" "}
                  <a href="https://www.postgresql.org/">PostgreSQL</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* TABLE ENDS */}
        <div className="text-white p-4 rounded-lg overflow-x-auto mb-6">
          <SyntaxHighlighter language="typescript" style={a11yLight}>
            {sentrySnippet.sentryoptions}
          </SyntaxHighlighter>
        </div>
        <div className="mb-5">
          <code className="bg-gray-200 px-2 py-1 rounded">
            expiresIn?: string | number
          </code>
        </div>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li className="mb-2">
            Tipo: <code className="bg-gray-200 px-2 py-1 rounded">string</code>{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">number</code>
          </li>
          <li className="mb-2">
            Valor por defecto:{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">1m</code> (un
            minuto)
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Esta opción define el tiempo de duración para el token interno
          utilizado por el módulo. Este token es usado para la autenticación, la
          validez de alguna sesión, o la duración de ciertos datos transitorios
          que maneja el módulo. Si no se especifica, el token tendrá una
          duración predeterminada de un minuto.
        </p>
        <div className="mb-5">
          <code className="bg-gray-200 px-2 py-1 rounded">
            databaseOptions?: DatabaseOptions
          </code>
        </div>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li className="mb-2">
            Tipo:{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">
              DatabaseOptions
            </code>{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">number</code>
          </li>
          <li className="mb-2">
            Valor por defecto: La data se guarda en memoria si no se proporciona
            esta opción.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Esta opción permite configurar las credenciales para la conexión a una
          base de datos PostgreSQL. El módulo utilizará esta configuración para
          la persistencia de datos, lo que significa que la información
          relevante (usuario) se almacenará en la base de datos en lugar de solo
          en la memoria.
        </p>
        <p className="text-gray-700 mb-4">
          Si{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">databaseOptions</code>{" "}
          no se proporciona, el módulo operará en modo "solo en memoria". Esto
          es útil para entornos de desarrollo, pruebas o situaciones donde la
          persistencia de datos no es crítica o se gestiona externamente.
        </p>
        <div className="text-white p-4 rounded-lg overflow-x-auto mb-6">
          <SyntaxHighlighter language="typescript" style={a11yLight}>
            {sentrySnippet.databaseoptions}
          </SyntaxHighlighter>
        </div>
        <h4 className="text-xl font-medium text-gray-800 mb-3">
          Ejemplo de Uso
        </h4>
        <div className="text-white p-4 rounded-lg overflow-x-auto mb-6">
          <SyntaxHighlighter language="typescript" style={a11yLight}>
            {sentrySnippet.example}
          </SyntaxHighlighter>
        </div>
        <p className="text-gray-700 mb-4">
          En este ejemplo, el{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">SentryModule</code> se
          inicializa para que sus tokens internos duren 5 minutos y toda la data
          persistente se guarde en la base de datos{" "}
          <a href="https://www.postgresql.org/">PostgreSQL</a> especificada. Si
          databaseOptions se omitiera, la data se manejaría en memoria.
        </p>
      </div>
    </section>
  );
};
