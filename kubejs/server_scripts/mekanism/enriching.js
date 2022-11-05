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
        },
        {
            input: 'minecraft:blaze_powder',
            output: Item.of('kubejs:enriched_blaze', 1),
            id: `${id_prefix}enriched_blaze`
        },
        {
            input: 'minecraft:ender_pearl',
            output: Item.of('kubejs:enriched_ender', 1),
            id: `${id_prefix}enriched_ender`
        },
        {
            input: 'ae2:silicon',
            output: Item.of('kubejs:enriched_silicon', 1),
            id: `${id_prefix}enriched_silicon`
        },
        {
            input: 'ae2:certus_quartz_dust',
            output: Item.of('kubejs:enriched_certus', 1),
            id: `${id_prefix}enriched_certus`
        },
        {
            input: 'minecraft:glowstone',
            output: Item.of('kubejs:enriched_glowstone', 1),
            id: `${id_prefix}enriched_glowstone`
        },
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
