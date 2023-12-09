# Endpoint: `POST/usuarios`

Permite crear un nuevo usuario.


## Ejemplo de Solicitud
```http
POST /usuarios/{id}
Content-Type: application/json

{
  "correo_electronico": "usuario4@example.com",
  "contrasena": "penrose512",
  "nombre_completo": "LSTR"
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_usuario": 4,
  "mensaje": "Usuario creado exitosamente."
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 400,
  "error": "bad_request",
  "error_description": "Faltan parámetros obligatorios en la solicitud."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un datos válido en la solicitud para obtener la información
  sobre un usuario en específico.