db.createCollection("REGION")
db.REGION.insertMany([
{ Codigo: "01", Nombre: "Tarapacá" },
{ Codigo: "02", Nombre: "Antofagasta" },
{ Codigo: "03", Nombre: "Atacama" },
{ Codigo: "04", Nombre: "Coquimbo" },
{ Codigo: "05", Nombre: "Valparaíso" },
{ Codigo: "06", Nombre: "OHiggins" },
{ Codigo: "07", Nombre: "El Maule" },
{ Codigo: "08", Nombre: "El Bío Bío" },
{ Codigo: "09", Nombre: "La Araucanía" },
{ Codigo: "10", Nombre: "Los Lagos" },
{ Codigo: "11", Nombre: "Aysén" },
{ Codigo: "12", Nombre: "Magallanes y Antártica Chilena" },
{ Codigo: "13", Nombre: "Región Metropolitana de Santiago" },
{ Codigo: "14", Nombre: "Los Ríos" },
{ Codigo: "15", Nombre: "Arica y Parinacota" },
{ Codigo: "16", Nombre: "Ñuble" }
])



db.createCollection("COMUNA")
db.COMUNA.insertMany([
{ Codigo: "05101", Nombre: "Valparaíso", Codigo_Region: "05" },
{ Codigo: "05109", Nombre: "Viña del Mar", Codigo_Region: "05" },
{ Codigo: "05201", Nombre: "Isla de Pascua", Codigo_Region: "05" },
{ Codigo: "06101", Nombre: "Rancagua", Codigo_Region: "06" },
{ Codigo: "09115", Nombre: "Pucón", Codigo_Region: "09" },
{ Codigo: "10105", Nombre: "Frutillar", Codigo_Region: "10" },
{ Codigo: "13101", Nombre: "Santiago", Codigo_Region: "13" },
{ Codigo: "13110", Nombre: "La Florida", Codigo_Region: "13" },
{ Codigo: "13114", Nombre: "Las Condes", Codigo_Region: "13" },
{ Codigo: "13119", Nombre: "Maipú", Codigo_Region: "13" },
{ Codigo: "13124", Nombre: "Pudahuel", Codigo_Region: "13" },
{ Codigo: "13125", Nombre: "Quilicura", Codigo_Region: "13" }
])

 

db.createCollection("CLIENTE")
db.CLIENTE.insertMany([
{ Codigo: "10001", Nombre: "JUAN CRISTOBAL PEREZ RIVAS", Direccion: "MANQUEHUE 2990 DEPTO. 204", Precio: "", Telefono: "990898983" },
{ Codigo: "10002", Nombre: "CARLOS IGNACIO SOTO AMENABAR", Direccion: "LOS PAJARITOS 8690 DEPTO. 386", Precio: "", Telefono: "229909988" },
{ Codigo: "10003", Nombre: "MONICA ELISA GONZALEZ FUENTES", Direccion: "PERU 345", Precio: "", Telefono: "945000992" },
{ Codigo: "10004", Nombre: "SUSANA ROSA JIMENEZ JERIA", Direccion: "NONATO COO 2089", Precio: "", Telefono: "938988833" },
{ Codigo: "10005", Nombre: "XIMENA BUSTOS CIFUENTES", Direccion: "CATEDRAL 779 DEPTO. 504", Precio: "", Telefono: "229909988" },
{ Codigo: "10006", Nombre: "SERGIO ANDRES GUTIERREZ AVENDAÑO", Direccion: "ARTURO PRAT 503", Precio: "", Telefono: "322240994" },
{ Codigo: "10007", Nombre: "HOSTERÍA EL VOLCÁN", Direccion: "LOS CISNES 340", Precio: "", Telefono: "988009822" },
{ Codigo: "10008", Nombre: "RESTAURANT EL RODEO", Direccion: "AV. BERNARDO OHIGGINS 602 LOCAL 21", Precio: "", Telefono: "990039903" },
{ Codigo: "10009", Nombre: "ROGELIO MOYA TORO", Direccion: "RICARDO CUMMING 104 DEPTO. 422", Precio: "", Telefono: "995009994" },
{ Codigo: "10010", Nombre: "CARLOS FAUNDEZ MENDEZ", Direccion: "LOS OLIVOS 1209", Precio: "", Telefono: "999999700" },
{ Codigo: "10011", Nombre: "LUIS FARIAS COFRE", Direccion: "Las Carmelitas 0190", Precio: "", Telefono: "999999980" }
])

db.createCollection("LOCAL")
db.LOCAL.insertMany([
{ Codigo: "L0001", Descripcion: "Apoquindo", Codigo_Comuna: "13114" },
{ Codigo: "L0002", Descripcion: "Maipú", Codigo_Comuna: "13119" },
{ Codigo: "L0003", Descripcion: "Alameda", Codigo_Comuna: "13101" },
{ Codigo: "L0004", Descripcion: "Colombia", Codigo_Comuna: "13110" },
{ Codigo: "L0005", Descripcion: "Lago Llanquihue", Codigo_Comuna: "10105" },
{ Codigo: "L0006", Descripcion: "Congreso", Codigo_Comuna: "05101" },
{ Codigo: "L0007", Descripcion: "Lago Villarrica", Codigo_Comuna: "09115" },
{ Codigo: "L0008", Descripcion: "El Teniente", Codigo_Comuna: "06101" },
{ Codigo: "L0009", Descripcion: "El Reloj", Codigo_Comuna: "05109" },
{ Codigo: "L0010", Descripcion: "El Moai", Codigo_Comuna: "05201" }
])

db.createCollection("ARTICULOS")
db.ARTICULOS.insertMany([
{ Codigo: "AD001", Descripcion: "Alitas BBQ 6 Unidades", Precio: "3990" },
{ Codigo: "AD002", Descripcion: "Chicken Pops 6 Und.", Precio: "1300" },
{ Codigo: "AD003", Descripcion: "Chicken Pops 10 Und.", Precio: "1990" },
{ Codigo: "AD004", Descripcion: "Empanadas de Queso 3 Und.", Precio: "990" },
{ Codigo: "AD005", Descripcion: "Empanadas de Queso 4 Und.", Precio: "1300" },
{ Codigo: "AD008", Descripcion: "Pan Ajo Tradicional 4 Und.", Precio: "1990" },
{ Codigo: "AD009", Descripcion: "Pan de Ajo Supremo 4 Un.", Precio: "2490" },
{ Codigo: "AR901", Descripcion: "Sandwich Churrasco", Precio: "3000" },
{ Codigo: "BB002", Descripcion: "Botella Coca Cola 3L", Precio: "2990" },
{ Codigo: "BB004", Descripcion: "Botella Coca Cola 1.5", Precio: "2290" },
{ Codigo: "BB005", Descripcion: "Lata Pepsi ", Precio: "1100" },
{ Codigo: "BB006", Descripcion: "Lata Coca Cola", Precio: "990" },
{ Codigo: "PT002", Descripcion: "Chocotorta Doble", Precio: "3990" },
{ Codigo: "PT004", Descripcion: "Helado La Cremeria Frambuesa", Precio: "4590" },
{ Codigo: "PZ001", Descripcion: "Pizza Italiana", Precio: "8090" },
{ Codigo: "PZ002", Descripcion: "Pizza Hawaiana", Precio: "8090" },
{ Codigo: "PZ003", Descripcion: "Pizza Cuatro Estaciones", Precio: "9690" },
{ Codigo: "PZ006", Descripcion: "Pizza Veggie Lovers", Precio: "10490" },
{ Codigo: "PZ007", Descripcion: "Pizza Suprema", Precio: "11290" },
{ Codigo: "PZ008", Descripcion: "Pizza Pepperoni XL Artesanal", Precio: "12730" },
{ Codigo: "PZ009", Descripcion: "Pizza Pepperoni Familiar", Precio: "10260" },
])


db.createCollection("PEDIDO")
db.PEDIDO.insertMany([
{Numero_Pedido: "P100000011", Fecha: "2020-12-01", Precio: 16180, Codigo_Estado_Pedido: "ENTRE", Codigo_Forma_Pago: "TJCRE", Codigo_Cliente: "10001", Codigo_Local: "L0001" },
{Numero_Pedido: "P100000012", Fecha: "2021-02-05", Precio: 12080, Codigo_Estado_Pedido: "ENTRE", Codigo_Forma_Pago: "EFECT", Codigo_Cliente: "10002", Codigo_Local: "L0002" },
{Numero_Pedido: "P100000013", Fecha: "2021-05-09", Precio: 21670, Codigo_Estado_Pedido: "DESPA", Codigo_Forma_Pago: "TJCRE", Codigo_Cliente: "10003", Codigo_Local: "L0004" },
{Numero_Pedido: "P100000014", Fecha: "2021-06-12", Precio: 29970, Codigo_Estado_Pedido: "DESPA", Codigo_Forma_Pago: "TJCRE", Codigo_Cliente: "10004", Codigo_Local: "L0005" },
{Numero_Pedido: "P100000015", Fecha: "2021-06-15", Precio: 3480, Codigo_Estado_Pedido: "ANULA", Codigo_Forma_Pago: "TJPRE", Codigo_Cliente: "10005", Codigo_Local: "L0003" },
{Numero_Pedido: "P100000016", Fecha: "2021-07-01", Precio: 10260, Codigo_Estado_Pedido: "DESPA", Codigo_Forma_Pago: "TJCRE", Codigo_Cliente: "10006", Codigo_Local: "L0006" },
{Numero_Pedido: "P100000017", Fecha: "2021-08-31", Precio: 32640, Codigo_Estado_Pedido: "INGRE", Codigo_Forma_Pago: "TJCRE", Codigo_Cliente: "10001", Codigo_Local: "L0001" },
{Numero_Pedido: "P100000018", Fecha: "2021-09-18", Precio: 13680, Codigo_Estado_Pedido: "ANULA", Codigo_Forma_Pago: "TJCRE", Codigo_Cliente: "10007", Codigo_Local: "L0007" },
{Numero_Pedido: "P100000019", Fecha: "2021-09-18", Precio: 3000, Codigo_Estado_Pedido: "ENTRE", Codigo_Forma_Pago: "EFECT", Codigo_Cliente: "10008", Codigo_Local: "L0008" },
{Numero_Pedido: "P100000020", Fecha: "2021-09-28", Precio: 12860, Codigo_Estado_Pedido: "INGRE", Codigo_Forma_Pago: "TJDEB", Codigo_Cliente: "10009", Codigo_Local: "L0003" },
{Numero_Pedido: "P100000021", Fecha: "2021-12-06", Precio: 5570, Codigo_Estado_Pedido: "INGRE", Codigo_Forma_Pago: "WPTRA", Codigo_Cliente: "10005", Codigo_Local: "L0006" }
])


db.createCollection("PEDIDO_ARTICULO")
db.PEDIDO_ARTICULO.insertMany([
{Numero_Pedido: "P100000011", Codigo_Articulo: "PZ001", Cantidad: 2, Precio: 8090 },
{Numero_Pedido: "P100000012", Codigo_Articulo: "AD001", Cantidad: 1, Precio: 3990 },
{Numero_Pedido: "P100000012", Codigo_Articulo: "PZ002", Cantidad: 1, Precio: 8090 },
{Numero_Pedido: "P100000013", Codigo_Articulo: "BB004", Cantidad: 1, Precio: 2290 },
{Numero_Pedido: "P100000013", Codigo_Articulo: "PZ001", Cantidad: 1, Precio: 8090 },
{Numero_Pedido: "P100000013", Codigo_Articulo: "PZ007", Cantidad: 1, Precio: 11290 },
{Numero_Pedido: "P100000014", Codigo_Articulo: "BB005", Cantidad: 4, Precio: 1100 },
{Numero_Pedido: "P100000014", Codigo_Articulo: "PT004", Cantidad: 1, Precio: 4590 },
{Numero_Pedido: "P100000014", Codigo_Articulo: "PZ006", Cantidad: 2, Precio: 10490 },
{Numero_Pedido: "P100000015", Codigo_Articulo: "AD004", Cantidad: 1, Precio: 990 },
{Numero_Pedido: "P100000015", Codigo_Articulo: "AD009", Cantidad: 1, Precio: 2490 },
{Numero_Pedido: "P100000016", Codigo_Articulo: "PZ009", Cantidad: 1, Precio: 10260 },
{Numero_Pedido: "P100000017", Codigo_Articulo: "AR901", Cantidad: 1, Precio: 3000 },
{Numero_Pedido: "P100000017", Codigo_Articulo: "BB005", Cantidad: 2, Precio: 1100 },
{Numero_Pedido: "P100000017", Codigo_Articulo: "BB006", Cantidad: 2, Precio: 990 },
{Numero_Pedido: "P100000017", Codigo_Articulo: "PZ008", Cantidad: 2, Precio: 12730 },
{Numero_Pedido: "P100000018", Codigo_Articulo: "PT002", Cantidad: 1, Precio: 3990 },
{Numero_Pedido: "P100000018", Codigo_Articulo: "PZ003", Cantidad: 1, Precio: 9690 },
{Numero_Pedido: "P100000019", Codigo_Articulo: "AR901", Cantidad: 1, Precio: 3000 },
{Numero_Pedido: "P100000020", Codigo_Articulo: "AD003", Cantidad: 1, Precio: 1990 },
{Numero_Pedido: "P100000020", Codigo_Articulo: "AD005", Cantidad: 1, Precio: 1300 },
{Numero_Pedido: "P100000020", Codigo_Articulo: "AD008", Cantidad: 1, Precio: 1990 },
{Numero_Pedido: "P100000020", Codigo_Articulo: "BB002", Cantidad: 1, Precio: 2990 },
{Numero_Pedido: "P100000020", Codigo_Articulo: "PT004", Cantidad: 1, Precio: 4590 },
{Numero_Pedido: "P100000021", Codigo_Articulo: "AD002", Cantidad: 2, Precio: 1300 },
{Numero_Pedido: "P100000021", Codigo_Articulo: "AD004", Cantidad: 3, Precio: 990 }
])



db.createCollection("ESTADO_PEDIDO")
db.ESTADO_PEDIDO.insertMany([
{"Codigo": "ANULA", "Descripcion": "ANULADO" },
{"Codigo": "DESPA", "Descripcion": "DESPACHADO" },
{"Codigo": "ENTRE", "Descripcion": "ENTREGADO" },
{"Codigo": "INGRE", "Descripcion": "INGRESADO" }
])

db.createCollection("FORMA_PAGO")
db.FORMA_PAGO.insertMany([
{"Codigo": "EFECT", "Descripcion": "EFECTIVO" },
{"Codigo": "OCTRA", "Descripcion": "ONECLICK TRANSBANK" },
{"Codigo": "OTROM", "Descripcion": "OTRO MEDIO DE PAGO" },
{"Codigo": "PAYP", "Descripcion": "PAY PAL" },
{"Codigo": "TJCRE", "Descripcion": "TARJETA DE CRÉDITO" },
{"Codigo": "TJDEB", "Descripcion": "TARJETA DE DÉBITO" },
{"Codigo": "TJPRE", "Descripcion": "TARJETA PRE PAGO" },
{"Codigo": "WPTRA", "Descripcion": "WEB PAY TRANSBANK" }
])
