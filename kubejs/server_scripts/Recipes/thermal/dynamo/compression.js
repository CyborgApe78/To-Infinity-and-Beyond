onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/compression_fuel/';

    var multiplier = 10;
    var data = {
        recipes: [
            { input: 'mekanism:ethene', energy: 1800000 },
            { input: 'mekanismgenerators:bioethanol', energy: 400000 },
            { input: 'industrialforegoing:biofuel', energy: 100000 },
            { input: 'kubejs:liquid_hootch', energy: 30000 },
            { input: 'kubejs:liquid_seed_oil', energy: 8000 },
            { input: 'kubejs:liquid_grassoline', energy: 80000 },
            { input: 'kubejs:liquid_seed_oil', energy: 8000 },
            { input: 'kubejs:liquid_fire_water', energy: 75000 },
        ]
    };
    data.recipes.forEach((recipe) => {
        //event.recipes.thermal.compression_fuel(recipe.fluid).energy(recipe.energy * multiplier);

            event.recipes.thermal.compression_fuel(Fluid.of(recipe.input, 1000)).energy(recipe.energy * multiplier),
            id_prefix

    });
});
