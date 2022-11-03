onEvent('recipes', (event) => {
    const id_prefix = 'infinity:thermal/bottler/';
    const recipes = [
        {
            input: 'buildinggadgets:construction_block_powder',
            fluid: Fluid.of('minecraft:water', 1000),
            output: 'buildinggadgets:construction_block_dense',
            id: `${id_prefix}construction_block_dense`
        }
    ];

  

    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
