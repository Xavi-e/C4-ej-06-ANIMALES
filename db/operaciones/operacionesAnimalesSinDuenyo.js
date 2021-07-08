const Animal = require("../schemas/Animal");

const animalesSinDuenyo = async () => {
    const animalesPaAdoptar = await Animal.findAll({
        where: {
            duenyo: null
        }
    });
    return animalesPaAdoptar;
};
module.exports = {
    animalesSinDuenyo,
};