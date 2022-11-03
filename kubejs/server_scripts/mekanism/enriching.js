onEvent('recipes', (event) => {
    const id_prefix = 'infinity:mekanism/enriching/';
    const recipes = [
        {
            input: 'minecraft:sugar_cane',
            output: Item.of('minecraft:sugar', 2),
            id: `${id_prefix}sugar`
        },
        {
            input: 'thermal:blizz_rod',
            output: Item.of('thermal:blizz_powder', 4),
            id: `${id_prefix}blizz_powder`
        },
        {
            input: 'thermal:blitz_rod',
            output: Item.of('thermal:blitz_powder', 4),
            id: `${id_prefix}blitz_powder`
        },
        {
            input: 'thermal:basalz_rod',
            output: Item.of('thermal:basalz_powder', 4),
            id: `${id_prefix}basalz_powder`
        },
        {
            input: 'minecraft:blaze_rod',
            output: Item.of('minecraft:blaze_powder', 4),
            id: `${id_prefix}blaze_powder`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
