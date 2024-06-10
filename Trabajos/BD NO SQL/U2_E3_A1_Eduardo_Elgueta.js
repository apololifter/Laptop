use restaurant
db.createCollection("Receta")
db.Receta.insertMany([
    { 
        codReceta: "01", 
        nombreReceta: "Ensalada César de Pollo", 
        valor: "$ 6000", 
        tiempoPreparacion: "20 minutos", 
        chefEspecialistas: [{
            runChef: "13.545.232-4",
              nombrechef: "Yann Yvin"
        }], 
        ingredientes: [
            { 
                nombreIngrediente: "Lechuga", 
                gramajeRequerido: "200g", 
                observaciónIngrediente: "Lavar y cortar en trozos" 
            },
            { 
                nombreIngrediente: "Pollo", 
                gramajeRequerido: "300g", 
                observaciónIngrediente: "Cocinar y desmenuzar" 
            },
        ] 
    },
    { 
        codReceta: "02", 
        nombreReceta: "Salmón al horno con verduras asadas", 
        valor: "$ 16000", 
        tiempoPreparacion: "30 minutos", 
        chefEspecialistas: [{
            runChef: "14.563.212-1",
            nombrechef: "Cristopher Carpentier"
        }], 
        ingredientes: [
            { 
                nombreIngrediente: "Salmón", 
                gramajeRequerido: "400g", 
                observaciónIngrediente: "Lavar y sazonar" 
            },
            { 
                nombreIngrediente: "Pimientos", 
                gramajeRequerido: "200g", 
                observaciónIngrediente: "Cortar en tiras" 
            },
            { 
                nombreIngrediente: "Cebolla", 
                gramajeRequerido: "150g", 
                observaciónIngrediente: "Cortar en rodajas" 
            },
        ]
    },
    { 
        codReceta: "03", 
        nombreReceta: "Pasta alfredo con champiñones", 
        valor: "$ 5000", 
        tiempoPreparacion: "25 minutos", 
        chefEspecialistas: [{
            runChef: "14.563.212-1",
            nombrechef: "Cristopher Carpentier"
        }], 
        ingredientes: [
            { 
                nombreIngrediente: "Pasta", 
                gramajeRequerido: "300g", 
                observaciónIngrediente: "Cocinar al dente" 
            },
            { 
                nombreIngrediente: "Champiñones", 
                gramajeRequerido: "200g", 
                observaciónIngrediente: "Cortar en láminas y saltear" 
            },
            { 
                nombreIngrediente: "Crema de leche", 
                gramajeRequerido: "250ml", 
                observaciónIngrediente: "Agregar al final y mezclar" 
            },
        ]
    },
    { 
        codReceta: "04", 
        nombreReceta: "Hamburguesa de pavo con aguacate", 
        valor: "$ 7000", 
        tiempoPreparacion: "25 minutos", 
        chefEspecialistas: [{
            runChef: "13.545.232-4",
            nombrechef: "Yann Yvin"
        }], 
        ingredientes: [
            { 
                nombreIngrediente: "Pavo molido", 
                gramajeRequerido: "400g", 
                observaciónIngrediente: "Formar las hamburguesas" 
            },
            { 
                nombreIngrediente: "Aguacate", 
                gramajeRequerido: "2 unidades", 
                observaciónIngrediente: "Cortar en rodajas" 
            },
            { 
                nombreIngrediente: "Pan de hamburguesa", 
                gramajeRequerido: "4 unidades", 
                observaciónIngrediente: "Tostar ligeramente" 
            },
        ]
    },
    { 
        codReceta: "05", 
        nombreReceta: "Arroz con pollo", 
        valor: "$ 15000", 
        tiempoPreparacion: "40 minutos", 
        chefEspecialistas: [{
            runChef: "14.563.212-1",
            nombrechef: "Cristopher Carpentier"
        }], 
        ingredientes: [
            { 
                nombreIngrediente: "Arroz", 
                gramajeRequerido: "300g", 
                observaciónIngrediente: "Cocinar al vapor" 
            },
            { 
                nombreIngrediente: "Pollo", 
                gramajeRequerido: "400g", 
                observaciónIngrediente: "Cocinar y desmenuzar" 
            },
            { 
                nombreIngrediente: "Pimiento rojo", 
                gramajeRequerido: "1 unidad", 
                observaciónIngrediente: "Cortar en cubos" 
            },
        ]
    },
    { 
        codReceta: "06", 
        nombreReceta: "Tacos de pescado", 
        valor: "$ 16000", 
        tiempoPreparacion: "30 minutos", 
        chefEspecialistas: [{
            runChef: "13.545.232-4",
            nombrechef: "Yann Yvin"
        }], 
        ingredientes: [
            { 
                nombreIngrediente: "Filete de pescado", 
                gramajeRequerido: "500g", 
                observaciónIngrediente: "Cortar en tiras y sazonar" 
            },
            { 
                nombreIngrediente: "Tortillas de maíz", 
                gramajeRequerido: "12 unidades", 
                observaciónIngrediente: "Calentar en comal" 
            },
            { 
                nombreIngrediente: "Cilantro", 
                gramajeRequerido: "50g", 
                observaciónIngrediente: "Picar finamente" 
            },
        ]
    },
    { 
        codReceta: "07", 
        nombreReceta: "Ensalada de quinoa con vegetales", 
        valor: "$ 3500", 
        tiempoPreparacion: "20 minutos", 
        chefEspecialistas: [{
            runChef: "14.563.212-1",
            nombrechef: "Cristopher Carpentier"
        }], 
        ingredientes: [
            { 
                nombreIngrediente: "Quinoa", 
                gramajeRequerido: "200g", 
                observaciónIngrediente: "Cocinar según las instrucciones" 
            },
            { 
                nombreIngrediente: "Tomate cherry", 
                gramajeRequerido: "150g", 
                observaciónIngrediente: "Cortar por la mitad" 
            },
            { 
                nombreIngrediente: "Pepino", 
                gramajeRequerido: "1 unidad", 
                observaciónIngrediente: "Cortar en rodajas" 
            },
        ]
    },
    { 
        codReceta: "08", 
        nombreReceta: "Fajitas de pollo con pimientos", 
        valor: "$ 9000", 
        tiempoPreparacion: "25 minutos", 
        chefEspecialistas: [{
            runChef: "13.545.232-4",
            nombrechef: "Yann Yvin"
        }], 
        ingredientes: [
            { 
                nombreIngrediente: "Pechuga de pollo", 
                gramajeRequerido: "400g", 
                observaciónIngrediente: "Cortar en tiras y marinar" 
            },
            { 
                nombreIngrediente: "Pimientos de colores", 
                gramajeRequerido: "300g", 
                observaciónIngrediente: "Cortar en tiras" 
            },
            { 
                nombreIngrediente: "Cebolla", 
                gramajeRequerido: "1 unidad", 
                observaciónIngrediente: "Cortar en tiras" 
            },
        ]
    },
    { 
        codReceta: "09", 
        nombreReceta: "Lasaña vegetariana", 
        valor: "$ 9000", 
        tiempoPreparacion: "1 hora", 
        chefEspecialistas: [{
            runChef: "14.563.212-1",
            nombrechef: "Cristopher Carpentier"
        }], 
        ingredientes: [
            { 
                nombreIngrediente: "Láminas de lasaña", 
                gramajeRequerido: "250g", 
                observaciónIngrediente: "Cocinar según las instrucciones" 
            },
            { 
                nombreIngrediente: "Espinacas", 
                gramajeRequerido: "200g", 
                observaciónIngrediente: "Cocinar y escurrir" 
            },
            { 
                nombreIngrediente: "Queso mozzarella", 
                gramajeRequerido: "200g", 
                observaciónIngrediente: "Rallar" 
            },
        ]
    },
    { 
        codReceta: "10", 
        nombreReceta: "Smoothie de frutas", 
        valor: "$ 3000", 
        tiempoPreparacion: "10 minutos", 
        chefEspecialistas: [{
            runChef: "13.545.232-4",
            nombrechef: "Yann Yvin"
        }], 
        ingredientes: [
            { 
                nombreIngrediente: "Fresas", 
                gramajeRequerido: "200g", 
                observaciónIngrediente: "Lavar y quitar los tallos" 
            },
            { 
                nombreIngrediente: "Plátano", 
                gramajeRequerido: "2 unidades", 
                observaciónIngrediente: "Pelar y cortar en rodajas" 
            },
            { 
                nombreIngrediente: "Yogur natural", 
                gramajeRequerido: "250ml", 
                observaciónIngrediente: "Agregar para dar consistencia" 
            },
        ]
    },
]);
