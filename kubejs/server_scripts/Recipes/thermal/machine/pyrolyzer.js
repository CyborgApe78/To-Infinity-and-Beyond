onEvent('recipes', (event) => {
    const id_prefix = 'infinity:thermal/pyrolyzer/';
    const recipes = [
        {
            input: 'kubejs:dust_biofuel_rich',
            outputs: [Fluid.of('kubejs:liquid_biocrude', 250).toJson()],
            experience: 0.15,
            energy: 4000,
            id: `${id_prefix}biofuel_rich/liquid_biocrude`
        },
        {
            input: 'mekanism:bio_fuel',
            outputs: [
                Fluid.of('kubejs:liquid_biocrude', 100).toJson()],
            experience: 0.15,
            energy: 4000,
            id: `${id_prefix}biofuel/liquid_biocrude`
        }
        
    ];
    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'thermal:pyrolyzer',
            ingredient: Ingredient.of(recipe.input).toJson(),
            result: recipe.outputs,
            experience: recipe.experience,
            energy: recipe.energy
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});

