db.createCollection("Pasaje")
db.Pasaje.insertMany([
  { CodPasaje: "01", RunPasajero: "19.213.243-2", Origen: "Santiago", Destino: "La Serena", NumAsiento: "23", Valor: "$30000" },
  { CodPasaje: "02", RunPasajero: "12.464.242-k", Origen: "Santiago", Destino: "Vallenar", NumAsiento: "22", Valor: "$35000" }
])

db.Pasaje.insert([
  { CodPasaje: "01", RunPasajero: "19.213.243-2", Origen: "Santiago", Destino: "La Serena", NumAsiento: "23", Valor: "$30000" },
  { CodPasaje: "02", RunPasajero: "12.464.242-k", Origen: "Santiago", Destino: "Vallenar", NumAsiento: "22", Valor: "$35000" }
])

db.Pasaje.save(
  { CodPasaje: "01", RunPasajero: "19.213.243-2", Origen: "Santiago", Destino: "La Serena", NumAsiento: "23", Valor: "$30000" }
)
db.Pasaje.save(
  { CodPasaje: "02", RunPasajero: "12.464.242-k", Origen: "Santiago", Destino: "Vallenar", NumAsiento: "22", Valor: "$35000" }
)

db.Pasaje.insertOne(
  { CodPasaje: "01", RunPasajero: "19.213.243-2", Origen: "Santiago", Destino: "La Serena", NumAsiento: "23", Valor: "$30000" }
)

db.Pasaje.insertOne(
  { CodPasaje: "02", RunPasajero: "12.464.242-k", Origen: "Santiago", Destino: "Vallenar", NumAsiento: "22", Valor: "$35000" }
)
