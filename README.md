Comandos:
use ecommerce
db.creaetCollection("mensajes")
db.creaetCollection("productos")
db.productos.insertMany([{title:"escuadra",price: 123.45},{title: "Calculadora",price: 2344.56},])
db.mensajes.insertMany([{nombre:"Juan",msg:"Quiero ese producto"},{nombre:"Pedro",msg:"Hacen envios?"}]);
db.productos.find()
db.mensajes.find()
db.productos.estimatedDocumentCount()
db.mensajes.estimatedDocumentCount()
db.productos.insertOne({title:"Globo terraqueo",price: 3345.67})
db.productos.updateMany({},{$set:{stock:100}})
