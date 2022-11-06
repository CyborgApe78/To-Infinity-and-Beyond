onEvent('recipes', (event) => {


    var multiplier = 10;
    const recipes = [
        {
            input: 'kubejs:liquid_blazing_pyrotheum',
            energy: 200000000
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal
            .magmatic_fuel(Fluid.of(recipe.input, 1000))
            .energy(recipe.energy * multiplier)
    });
});
