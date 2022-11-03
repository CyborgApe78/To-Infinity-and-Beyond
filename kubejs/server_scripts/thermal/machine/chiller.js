onEvent('recipes', (event) => {
    const id_prefix = 'infinity:thermal/chiller/';

    const recipes = [
        
        {
            inputs: [Fluid.of('kubejs:molten_refined_obsidian', 180), 'thermal:chiller_rod_cast'],
            output: Item.of('redstone_arsenal:obsidian_rod', 1),
            energy: 5000,
            id: `${id_prefix}obsidian_rod`
        },

        {
            inputs: [Fluid.of('kubejs:molten_refined_obsidian', 144), 'thermal:chiller_ingot_cast'],
            output: Item.of('mekanism:ingot_refined_obsidian', 1),
            energy: 5000,
            id: `${id_prefix}ingot_refined_obsidian`
        },
        {
            inputs: [Fluid.of('kubejs:molten_refined_glowstone', 144), 'thermal:chiller_ingot_cast'],
            output: Item.of('mekanism:ingot_refined_glowstone', 1),
            energy: 5000,
            id: `${id_prefix}ingot_refined_glowstone`
        }
       
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.chiller(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});


