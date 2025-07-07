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
            <table className="pure-css-table">
              <thead>
                <tr>
                  <th scope="col">Registro</th>
                  <th scope="col">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Registro de Usuario</th>
                  <td>Permite a un nuevo usuario registrarse en el sistema.</td>
                </tr>
                <tr>
                  <th scope="row">Endpoint</th>
                  <td>POST /auth/signup</td>
                </tr>
                <tr>
                  <th scope="row">Descripción</th>
                  <td>
                    Crea una nueva cuenta de usuario con la información
                    proporcionada.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cuerpo de la Petición</th>
                  <td>
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
            <table className="pure-css-table">
              <thead>
                <tr>
                  <th scope="col">Inicio de Sesión</th>
                  <th scope="col">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Inicio de Sesión de Usuario</th>
                  <td>
                    Permite a un usuario existente iniciar sesión y obtener un
                    token de autenticación.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Endpoint</th>
                  <td>POST /auth/login</td>
                </tr>
                <tr>
                  <th scope="row">Descripción</th>
                  <td>
                    Autentica a un usuario utilizando sus credenciales y emite
                    un token de acceso y un token de refresco.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Protección</th>
                  <td>
                    Requiere un proceso de autenticación previo para validar las
                    credenciales.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cuerpo de la Petición</th>
                  <td>
                    Tipo: application/json Esquema:
                    <SyntaxHighlighter language="json" style={a11yLight}>
                      {`{ "email": "string", "password": "string" }`}
                    </SyntaxHighlighter>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cuerpo de la Respuesta</th>
                  <td>
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
            <table className="pure-css-table">
              <thead>
                <tr>
                  <th scope="col">Refrescar Tokens</th>
                  <th scope="col">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Refrescar Tokens de Acceso</th>
                  <td>
                    Permite obtener un nuevo token de acceso utilizando un token
                    de actualización válido.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Endpoint</th>
                  <td>POST /auth/refresh</td>
                </tr>
                <tr>
                  <th scope="row">Descripción</th>
                  <td>
                    Intercambia un token caducado por un nuevo token de acceso.
                    Mantiene el token de actualización hasta que expire.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Protección</th>
                  <td>
                    Requiere un bearer token{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded">
                      refresh token
                    </code>
                    .
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cuerpo de la Petición</th>
                  <td>Ninguno.</td>
                </tr>
                <tr>
                  <th scope="row">Cuerpo de la Respuesta</th>
                  <td>
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
            <table className="pure-css-table">
              <thead>
                <tr>
                  <th scope="col">Obtener Información del Usuario</th>
                  <th scope="col">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    Obtener Información del Usuario Autenticado
                  </th>
                  <td>
                    Permite a un usuario autenticado obtener su propia
                    información de perfil.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Endpoint</th>
                  <td>GET /auth/me</td>
                </tr>
                <tr>
                  <th scope="row">Descripción</th>
                  <td>
                    Retorna los detalles del perfil del usuario actualmente
                    autenticado.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Protección</th>
                  <td>
                    Requiere un bearer token Requiere{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded">
                      refresh token
                    </code>
                    , un token de acceso válido en el encabezado Authorization.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cuerpo de la Petición</th>
                  <td>Ninguno.</td>
                </tr>
                <tr>
                  <th scope="row">Cuerpo de la Respuesta</th>
                  <td>
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
