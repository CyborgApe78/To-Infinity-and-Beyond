onEvent('recipes', (event) => {


    var data = {
        recipes: [{
                input: 'industrialforegoing:fertilizer',
                primaryMod: 2.0,
                secondaryMod: 2.0,
                energyMod: 0.8,
                minChance: 0.8,
                useChance: 0.8
            }],
          recipes: [{
                input: 'kubejs:phytogro_flux',
                primaryMod: 5.0,
                secondaryMod: 4.0,
                energyMod: 0.6,
                minChance: 0.8,
                useChance: 0.6
            }],
          recipes: [{
                input: 'kubejs:phytogro_rich',
                primaryMod: 4.0,
                secondaryMod: 3.5,
                energyMod: 0.7,
                minChance: 0.8,
                useChance: 0.7
            }]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.thermal
            .insolator_catalyst(recipe.input)
            .primaryMod(recipe.primaryMod)
            .secondaryMod(recipe.secondaryMod)
            .energyMod(recipe.energyMod)
            .minChance(recipe.minChance)
            .useChance(recipe.useChance)
            .id(recipe.id);
    });
});
