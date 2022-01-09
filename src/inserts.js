db.prime.drop()
db.prime.insertMany([

    {
    "articulo_vendido": "Nintendo Switch",
    "precio_unitario": 252.71,
    "no_unidades": 1,
    "fecha_venta": new Date("2021-12-03"),
    "precio_compra": 319.89,
    "cliente": "cliente1@gmail.com",
    "vendedor": "Nintendo",
    "prime": true,
    "categoria": ["ocio","electronica"]
    },
    
    {"articulo_vendido" : "Disco SSD 1TB", "precio_unitario" : 111, "no_unidades" : 2, "fecha_venta" : ISODate("2021-03-07"), "precio_compra" : 87.69, "cliente" : "cliente2@gmail.com", "vendedor" : "Western Digital", "prime" : true, "categoria" : "electronica" },
    {"articulo_vendido" : "Reservoir Dogs Blue-ray", "precio_unitario" : 7.1, "no_unidades" : 1, "fecha_venta" : ISODate("2021-11-25"), "precio_compra" : 8.99, "cliente" : "cliente3@gmail.com", "vendedor" : "DVD Store Spain", "prime" : false, "categoria" : "ocio" },
    {"articulo_vendido" : "Juego de cuchillo jamonero", "precio_unitario" : 27.65, "no_unidades" : 1, "fecha_venta" : ISODate("2021-02-05"), "precio_compra" : 34.99, "cliente" : "cliente4@gmail.com", "vendedor" : "CUPERINOX", "prime" : true, "categoria" : "cocina" },
    {"articulo_vendido" : "COSORI Freidora sin Aceite", "precio_unitario" : 110.59, "no_unidades" : 1, "fecha_venta" : ISODate("2021-09-23"), "precio_compra" : 139.99, "cliente" : "cliente5@outlook.com", "vendedor" : "COSORI", "prime" : false, "categoria" : [ "cocina", "electronica" ] },
    {"articulo_vendido" : "POCO X3 Pro", "precio_unitario" : 236.99, "no_unidades" : 1, "fecha_venta" : ISODate("2021-08-15"), "precio_compra" : 299.99, "cliente" : "cliente6@yahoo.com", "vendedor" : "Xiaomi", "prime" : true, "categoria" : "electronica" },
    {"articulo_vendido" : "Funda POCO X3 Pro", "precio_unitario" : 8.99, "no_unidades" : 1, "fecha_venta" : ISODate("2021-08-15"), "precio_compra" : 7.1, "cliente" : "cliente6@yahoo.com", "vendedor" : "Ringke", "prime" : true, "categoria" : "electronica" },
    {"articulo_vendido" : "Protector de pantalla POCO X3 Pro", "precio_unitario" : 7.89, "no_unidades" : 2, "fecha_venta" : ISODate("2021-08-15"), "precio_compra" : 9.99, "cliente" : "cliente6@yahoo.com", "vendedor" : "Ibywind", "prime" : true, "categoria" : "electronica" },
    {"articulo_vendido" : "Recetario de cocina - Mr. Wonderful", "precio_unitario" : 14.97, "no_unidades" : 1, "fecha_venta" : ISODate("2021-12-05"), "precio_compra" : 18.95, "cliente" : "cliente7@outlook.com", "vendedor" : "Mr. Wonderful", "prime" : true, "categoria" : [ "ocio", "cocina" ] },
    {"articulo_vendido" : "Nintendo Switch OLED", "precio_unitario" : 276.42, "no_unidades" : 1, "fecha_venta" : ISODate("2021-12-01T17:00:00Z"), "precio_compra" : 349.9, "cliente" : "cliente8@gmail.com", "vendedor" : "Nintendo", "prime" : true, "categoria" : [ "ocio", "electronica" ] },
    {"articulo_vendido" : "The Legend of Zelda: Breath of the Wild", "precio_unitario" : 43.44, "no_unidades" : 1, "fecha_venta" : ISODate("2021-11-31"), "precio_compra" : 54.99, "cliente" : "cliente8@gmail.com", "vendedor" : "Nintendo", "prime" : true, "categoria" : "ocio" },
    {"articulo_vendido" : "Colchon inchable individual", "precio_unitario" : 54.9, "no_unidades" : 5, "fecha_venta" : ISODate("2021-06-22"), "precio_compra" : 69.5, "cliente" : "cliente9@gmail.com", "vendedor" : "Active Era", "prime" : false, "categoria" : "hogar" }
])