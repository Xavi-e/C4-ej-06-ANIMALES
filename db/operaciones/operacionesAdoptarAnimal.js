const Animal = require("../schemas/Animal");

const adoptarAnimal = async (idAnimal, idDuenyo) => {
    const animalAdoptado = await Animal.update({
        duenyo: idDuenyo,
    },
    {
        where: {
            id: idAnimal,
        }

    }
    
    );
    return animalAdoptado;
};
module.exports = adoptarAnimal;