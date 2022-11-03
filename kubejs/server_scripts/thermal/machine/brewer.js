onEvent('recipes', (event) => {
    const id_prefix = 'infinity:thermal/refinery/';
    const recipes = [
        {
            outputs: [
                Fluid.of('kubejs:liquid_cloud_seed_concentrated', 200)
            ],
            input: [Fluid.of('kubejs:liquid_cloud_seed', 400), Item.of('#forge:dusts/silver')],
            id: `${id_prefix}liquid_cloud_seed_concentrated`
        },
        {
            outputs: [
                Fluid.of('kubejs:liquid_cloud_seed', 200)
            ],
            input: [Fluid.of('kubejs:liquid_seed_oil', 400), Item.of('minecraft:snowball')],
            id: `${id_prefix}liquid_cloud_seed`
        },
        {
            outputs: [
                Fluid.of('kubejs:liquid_sunshine', 200)
            ],
            input: [Fluid.of('thermal:glowstone', 400), Item.of('minecraft:redstone')],
            id: `${id_prefix}liquid_sunshine`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.brewer(recipe.outputs, recipe.input).id(recipe.id);
    });
});
