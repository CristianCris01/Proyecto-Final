Registro de usuario

POST /auth/register

Request:

{
  "nombre": "Juan Pérez",
  "email": "juan@gmail.com",
  "password": "MiPassword123"
}

Response:

{
  "success": true,
  "message": "Usuario registrado correctamente",
  "data": {
    "id": 1,
    "nombre": "Juan Pérez",
    "email": "juan@gmail.com"
  }
}

Inicio de sesión

POST /auth/login

Request:

{
  "email": "juan@gmail.com",
  "password": "MiPassword123"
}

Response:

{
  "success": true,
  "message": "Inicio de sesión exitoso",
  "data": {
    "user": {
      "id": 1,
      "nombre": "Juan Pérez",
      "email": "juan@gmail.com"
    },
    "access_token": "eyJhbGciOiJIUzI1NiJ9...",
    "token_type": "Bearer",
    "expires_in": 3600
  }
}

Cierre de sesión

POST /auth/logout

Request: No requiere cuerpo JSON.

Headers:

Authorization: Bearer <access_token>

Response:

{
  "success": true,
  "message": "Sesión cerrada correctamente"
}

Consultar información personal

GET /users/me

Response:

{
  "success": true,
  "data": {
    "id": 1,
    "nombre": "Juan Pérez",
    "email": "juan@gmail.com"
  }
}

Actualizar información personal

PUT /users/me

Request:

{
  "nombre": "Juan Pérez González",
  "email": "juanperez@gmail.com"
}

Response:

{
  "success": true,
  "message": "Información actualizada correctamente",
  "data": {
    "id": 1,
    "nombre": "Juan Pérez González",
    "email": "juanperez@gmail.com"
  }
}

Cambiar contraseña

PATCH /users/me/password

Request:

{
  "current_password": "MiPassword123",
  "new_password": "NuevaPassword456"
}

Response:

{
  "success": true,
  "message": "Contraseña actualizada correctamente"
}

Consultar carrito

GET /cart

Response:

{
  "success": true,
  "data": {
    "items": [
      {
        "id": 1,
        "publication_id": 1,
        "titulo": "Polera negra",
        "imagen": "https://tudominio.cl/images/polera.jpg",
        "precio_unitario": 12990,
        "cantidad": 2,
        "subtotal": 25980
      },
      {
        "id": 2,
        "publication_id": 2,
        "titulo": "Pantalón azul",
        "imagen": "https://tudominio.cl/images/pantalon.jpg",
        "precio_unitario": 24990,
        "cantidad": 1,
        "subtotal": 24990
      }
    ],
    "total_items": 3,
    "total": 50970
  }
}

Agregar producto al carrito

POST /cart/items

Request:

{
  "publication_id": 1,
  "cantidad": 2
}

Response:

{
  "success": true,
  "message": "Producto agregado al carrito",
  "data": {
    "id": 1,
    "publication_id": 1,
    "cantidad": 2,
    "subtotal": 25980
  }
}

Actualizar cantidad de un producto

PATCH /cart/items/{id}

Request:

{
  "cantidad": 5
}

Response:

{
  "success": true,
  "message": "Cantidad actualizada",
  "data": {
    "id": 1,
    "publication_id": 1,
    "cantidad": 5,
    "subtotal": 64950
  }
}

Eliminar producto del carrito

DELETE /cart/items/{id}

Response:

{
  "success": true,
  "message": "Producto eliminado del carrito"
}

Vaciar carrito

DELETE /cart/items

Response:

{
  "success": true,
  "message": "Carrito vaciado correctamente"
}

Realizar compra

POST /orders

Request:

{
  "metodo_pago": "transferencia",
  "direccion_envio": "Av. Principal 123, Santiago"
}

Response:
{
  "success": true,
  "message": "Orden creada correctamente",
  "data": {
    "order_id": 1001,
    "user_id": 1,
    "estado": "pendiente_pago",
    "metodo_pago": "transferencia",
    "total": 50970,
    "items": [
      {
        "publication_id": 1,
        "titulo": "Polera negra",
        "precio_unitario": 12990,
        "cantidad": 2,
        "subtotal": 25980
      },
      {
        "publication_id": 2,
        "titulo": "Pantalón azul",
        "precio_unitario": 24990,
        "cantidad": 1,
        "subtotal": 24990
      }
    ]
  }
}

Consultar historial de compras

GET /orders

Response:

{
  "success": true,
  "data": [
    {
      "order_id": 1001,
      "fecha": "2026-11-01T20:30:00Z",
      "estado": "pendiente_pago",
      "total": 50970
    },
    {
      "order_id": 1002,
      "fecha": "2026-10-20T15:00:00Z",
      "estado": "pagado",
      "total": 25980
    }
  ]
}

