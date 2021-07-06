
const preguntas = [
    {
        name: "dni",
        message: "Si fuera tan amable de indicar su DNI a continuación:",
        type: "input",
    },
    {
        name: "opciones",
        message: "Opciones",
        type: "list",
        choices: [
            {
                value: "todosMisAnimales",
                name: "Listar todos mis animales",
            },
            {
                value: "animalesUnaEspecie",
                name: "Listar todos mis animales de una especie",
            },
            {
                value: "datoAnimal",
                name: "Mostrar los datos de uno de mis animales",
            },
            {
                value: "adopta",
                name: "Adoptar un animal",
            },
            {
                value: "cambiarNombre",
                name: "Cambiar mi nombre",
            }

        ]
    }
];