# Endpoint: `POST/usuarios_brechas`

Permite registrar una nueva cuenta involucrada en una brecha de seguridad.


## Ejemplo de Solicitud
```http
POST /usuarios_brechas/{id}
Content-Type: application/json

{
  "fk_id_usuario": 3,
  "fK_id_brecha": 2
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_relacion": 4,
  "mensaje": "Usuario registrado exitosamente."
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