onEvent('recipes', (event) => {
    const id_prefix = 'infinity:thermal/sawmill/';
    const recipes = [
        {
            input: '#minecraft:planks',
            outputs: [Item.of('minecraft:stick', 6), Item.of('thermal:sawdust').withChance(0.25)],
            id: `${id_prefix}sticks_from_planks`
        },
        {
            input: '#minecraft:wooden_slabs',
            outputs: [Item.of('minecraft:stick', 3), Item.of('thermal:sawdust').withChance(0.125)],
            id: `${id_prefix}sticks_from_wooden_slabs`
        },
        {
            input: '#minecraft:wooden_stairs',
            outputs: [Item.of('minecraft:stick', 9), Item.of('thermal:sawdust').withChance(0.375)],
            id: `${id_prefix}sticks_from_wooden_stairs`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.sawmill(recipe.outputs, recipe.input).id(recipe.id);
    });
});
