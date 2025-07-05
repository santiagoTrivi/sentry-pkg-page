// Icons
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Endpoints = () => {
  return (
    <section id="endpoints" className="p-8 flex flex-col gap-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Endpoints </h2>
      <div className="mb-5">
        <p className="text-gray-700 mb-4">
          Este controlador maneja las operaciones relacionadas con la
          autenticación de usuarios, incluyendo registro, inicio de sesión,
          refresco de tokens y obtención de la información del usuario
          autenticado.
        </p>
      </div>
      <div className="mb-5">
        <h4 className="text-xl font-medium text-gray-800 mb-3">
          Registro de Usuario
        </h4>

        <div className="text-white p-4 rounded-lg overflow-x-auto mb-6">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Registro
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Descripción
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Registro de Usuario
                  </th>
                  <td className="px-6 py-4">
                    Permite a un nuevo usuario registrarse en el sistema.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Endpoint
                  </th>
                  <td className="px-6 py-4">POST /auth/signup</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Descripción
                  </th>
                  <td className="px-6 py-4">
                    Crea una nueva cuenta de usuario con la información
                    proporcionada.
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Cuerpo de la Petición
                  </th>
                  <td className="px-6 py-4">
                    Tipo: application/json Esquema:
                    <SyntaxHighlighter language="json" style={a11yLight}>
                      {`{ "email": "string", "password": "string", "username": "string" }`}
                    </SyntaxHighlighter>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h4 className="text-xl font-medium text-gray-800 mb-3">
          Inicio de Sesión de Usuario
        </h4>
        <div className="text-white p-4 rounded-lg overflow-x-auto mb-6">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Inicio de Sesión
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Descripción
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Inicio de Sesión de Usuario
                  </th>
                  <td className="px-6 py-4">
                    Permite a un usuario existente iniciar sesión y obtener un
                    token de autenticación.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Endpoint
                  </th>
                  <td className="px-6 py-4">POST /auth/login</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Descripción
                  </th>
                  <td className="px-6 py-4">
                    Autentica a un usuario utilizando sus credenciales y emite
                    un token de acceso y un token de refresco.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Protección
                  </th>
                  <td className="px-6 py-4">
                    Requiere un proceso de autenticación previo para validar las
                    credenciales.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Cuerpo de la Petición
                  </th>
                  <td className="px-6 py-4">
                    Tipo: application/json Esquema:
                    <SyntaxHighlighter language="json" style={a11yLight}>
                      {`{ "email": "string", "password": "string" }`}
                    </SyntaxHighlighter>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Cuerpo de la Respuesta
                  </th>
                  <td className="px-6 py-4">
                    Esquema:
                    <SyntaxHighlighter language="json" style={a11yLight}>
                      {`{ "access_token": "string", "refresh_token": "string" }`}
                    </SyntaxHighlighter>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h4 className="text-xl font-medium text-gray-800 mb-3">
          Refrescar Tokens de Acceso
        </h4>
        <div className="text-white p-4 rounded-lg overflow-x-auto mb-6">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Refrescar Tokens
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Descripción
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Refrescar Tokens de Acceso
                  </th>
                  <td className="px-6 py-4">
                    Permite obtener un nuevo token de acceso utilizando un token
                    de actualización válido.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Endpoint
                  </th>
                  <td className="px-6 py-4">POST /auth/refresh</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Descripción
                  </th>
                  <td className="px-6 py-4">
                    Intercambia un token caducado por un nuevo token de acceso.
                    Mantiene el token de actualización hasta que expire.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Protección
                  </th>
                  <td className="px-6 py-4">
                    Requiere un bearer token{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded">
                      refresh token
                    </code>
                    .
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Cuerpo de la Petición
                  </th>
                  <td className="px-6 py-4">Ninguno.</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Cuerpo de la Respuesta
                  </th>
                  <td className="px-6 py-4">
                    Esquema:
                    <SyntaxHighlighter language="json" style={a11yLight}>
                      {`{ "access_token": "string" }`}
                    </SyntaxHighlighter>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h4 className="text-xl font-medium text-gray-800 mb-3">
          Obtener Información del Usuario Autenticado
        </h4>
        <div className="text-white p-4 rounded-lg overflow-x-auto mb-6">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Obtener Información del Usuario
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Descripción
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Obtener Información del Usuario Autenticado
                  </th>
                  <td className="px-6 py-4">
                    Permite a un usuario autenticado obtener su propia
                    información de perfil.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Endpoint
                  </th>
                  <td className="px-6 py-4">GET /auth/me</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Descripción
                  </th>
                  <td className="px-6 py-4">
                    Retorna los detalles del perfil del usuario actualmente
                    autenticado.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Protección
                  </th>
                  <td className="px-6 py-4">
                    Requiere un bearer token Requiere{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded">
                      refresh token
                    </code>
                    , un token de acceso válido en el encabezado Authorization.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Cuerpo de la Petición
                  </th>
                  <td className="px-6 py-4">Ninguno.</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Cuerpo de la Respuesta
                  </th>
                  <td className="px-6 py-4">
                    Esquema:
                    <SyntaxHighlighter language="json" style={a11yLight}>
                      {`{ "id": "string", "username": "string", "email": "string", "createdAt": "timestamp", "updatedAt": "timestamp" }`}
                    </SyntaxHighlighter>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
