onEvent('recipes', (event) => {
    const id_prefix = 'infinity:thermal/chiller/';

    const recipes = [
        
        {
            inputs: [Fluid.of('kubejs:molten_refined_obsidian', 200), 'thermal:chiller_rod_cast'],
            output: Item.of('redstone_arsenal:obsidian_rod', 1),
            energy: 5000,
            id: `${id_prefix}obsidian_rod`
        },
        {
            inputs: [Fluid.of('kubejs:molten_plastic', 100), 'thermal:chiller_rod_cast'],
            output: Item.of('mekanism:hdpe_stick', 1),
            energy: 5000,
            id: `${id_prefix}hdpe_stick`
        }
       
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.chiller(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});


