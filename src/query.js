/*
Utilizar los operadores de etapa $match y $group.
Utilizar los operadores $sum, $multiply, $divide, $avg, $max y operadores de fechas.
*/

// Queremos saber el número de artículos vendidos en el mes de diciembre
// $match - $group - $sum
db.prime.aggregate( [
  { $match: {
    $and: [ 
     {fecha_venta: {$gt:new Date("2021-11-30T23:59:59Z")}}, 
     {fecha_venta: {$lt:new Date("2022-01-01T00:00:00Z")}} 
   ] } },
  { $group: { 
    _id: "$articulo_vendido", 
    sumQuantity: { $sum: "$no_unidades" }
  }}
] )

// Queremos saber las ganancias totales archivadas en la base de datos
// $multiply
db.prime.aggregate( [
  {$group: {
      _id: "null",
      ganancias_totales: {
          $sum: {
              $multiply: ["$precio_compra","$no_unidades"] }   
            }   }
  }
] )

// Queremos saber la mayor compra hecha por cada cliente
// $max
db.prime.aggregate( [
    { $group:
        {
          _id: "$cliente",
          compra_max: { $max: { $multiply: [ "$precio_compra", "$no_unidades" ] } },
        } }
] )

// Queremos conocer una media del ingreso mensual
// $avg y operador fecha
db.prime.aggregate( [
  {$group: {
      _id: { $month: "$fecha_venta" },
      ganancias_totales: {
          $sum: {
              $multiply: ["$precio_compra","$no_unidades"] }   
            }   }
  },
  {$group: {
    _id: "null",
    ingresos_mensuales: { $avg: "$ganancias_totales" }
  } }
] )

// Queremos saber con un minimo de 150€, cuanto saldría el producto pagando en 3 cuotas mensuales
// $div
db.prime.aggregate([
  { $match : { precio_compra : {$gte: 150} } },
  { $project: 
    {_id: 0,
    cliente: 1, 
    articulo_vendido: 1, 
    cuotas: 
      {$round: [{$divide: [ "$precio_compra", 3 ] }, 2]}
    }}
])

// Queremos saber el porcentaje de clientes con Amazon prime
// boolean
db.prime.aggregate([
  { $group: {
    _id: {
      cliente: "$cliente",
      prime: "$prime"
   }
  } },
  { $group: {
    _id: "$_id.prime",
    prime: { $sum: 1 },
  } }
])