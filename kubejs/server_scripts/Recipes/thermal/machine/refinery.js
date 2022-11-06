onEvent('recipes', (event) => {
    const id_prefix = 'infinity:thermal/refinery/';
    const recipes = [
        {
            outputs: [
                Fluid.of('kubejs:liquid_grassoline', 100)
            ],
            input: Fluid.of('kubejs:liquid_biocrude', 200),
            id: `${id_prefix}oil_cracking`
        },
        {
            outputs: [Item.of('minecraft:sugar', 2)],
            input: Fluid.of('thermal:syrup', 25),
            id: `${id_prefix}sugar`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.refinery(recipe.outputs, recipe.input).id(recipe.id);
    });
});
