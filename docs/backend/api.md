# Documentación API - Plataforma de Scouting

**Versión:** 1.0.0  
**Base URL (Desarrollo):** `http://localhost:3000/api`  
**Base URL (Producción):** `https://api.tudominio.com/api`

---

## 🔒 Autenticación (Auth Module)

La plataforma utiliza **JSON Web Tokens (JWT)** para la autenticación y autorización. 
Para acceder a los endpoints protegidos, debes incluir el token en los headers de tu petición HTTP:

```http
Authorization: Bearer <tu_jwt_token>