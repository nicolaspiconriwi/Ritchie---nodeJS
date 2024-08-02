# ¿Qué es JWT?

JWT (JSON Web Token) es un estándar abierto (RFC 7519) que define un formato compacto y autocontenido para la transmisión segura de información entre dos partes como un objeto JSON. Esta información puede ser verificada y confiable ya que está firmada digitalmente. Los JWT pueden ser firmados utilizando un algoritmo HMAC (Hash-based Message Authentication Code) o un par de claves pública/privada utilizando RSA o ECDSA.

## Estructura de un JWT

Un JWT está compuesto por tres partes separadas por un punto (`.`):

1. **Encabezado (Header)**: Contiene el tipo de token y el algoritmo de firma utilizado.
2. **Cuerpo (Payload)**: Contiene la información que se desea transmitir.
3. **Firma (Signature)**: Se utiliza para verificar que el mensaje no ha sido alterado en el camino.

La estructura de un JWT se ve de la siguiente manera:

```
xxxxx.yyyyy.zzzzz
```

Donde:

- `xxxxx` es el encabezado codificado en Base64.
- `yyyyy` es el cuerpo codificado en Base64.
- `zzzzz` es la firma.

## ¿Por qué JWT?

Los JWT son ampliamente utilizados en aplicaciones web y móviles para autenticar a los usuarios y transmitir información de forma segura. Algunas de las ventajas de utilizar JWT son:

- **Autenticación**: Los JWT se utilizan para autenticar a los usuarios y permitirles acceder a recursos protegidos.
- **Seguridad**: Los JWT pueden ser firmados digitalmente para garantizar que la información transmitida sea confiable y no haya sido alterada.
- **Portabilidad**: Los JWT son autocontenidos, lo que significa que toda la información necesaria para verificar la autenticidad del token está contenida en el mismo.
- **Escalabilidad**: Los JWT son fáciles de implementar y escalar en aplicaciones web y móviles.

## ¿Cómo funciona JWT?

El proceso de autenticación con JWT consta de los siguientes pasos:

1. El cliente envía las credenciales de autenticación al servidor. Veamos un ejemplo desde Javascript vainilla:

```javascript
const login = async (username, password) => {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  return data;
};
```

2. El servidor autentica al usuario y genera un JWT que contiene la información necesaria para identificar al usuario. Veamos un ejemplo en Node.js con typescript:

```typescript
import jwt from "jsonwebtoken";

const generateToken = (user: { id: number; username: string }) => {
  const token = jwt.sign(user, "secret", { expiresIn: "1h" });
  return token;
};

const user = { id: 1, username: "admin987" };
const token = generateToken(user);

console.log(token);
```

3. El servidor envía el JWT al cliente, quien lo almacena en local storage o en una cookie para su uso posterior. Veamos un ejemplo en Javascript vainilla:

```javascript
const fetchData = async (token) => {
  const response = await fetch("http://localhost:3000/data", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await response.json();
  return data;
};
```

4. El cliente envía el JWT en las solicitudes posteriores al servidor para autenticar al usuario y acceder a recursos protegidos. Veamos un ejemplo en Node.js con typescript:

```typescript
import jwt from "jsonwebtoken";

const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, "secret");
    return decoded;
  } catch (error) {
    return null;
  }
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbjk4NyJ9";

const decoded = verifyToken(token);

console.log(decoded);
```
