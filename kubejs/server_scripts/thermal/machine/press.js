onEvent('recipes', (event) => {
    const id_prefix = 'infinity:thermal/press/';
    const recipes = [
        
        {
            inputs: [Item.of('mekanism:hdpe_pellet')],
            outputs: [Item.of('mekanism:hdpe_sheet')],
            energy: 2400,
            id: `${id_prefix}hdpe_sheet`
        },
        {
            inputs: [Item.of('minecraft:vine')],
            outputs: [Fluid.of('industrialforegoing:latex', 50)],
            energy: 400,
            id: `${id_prefix}vine_to_latex`
        },
        {
            inputs: [Item.of('minecraft:dandelion')],
            outputs: [Fluid.of('industrialforegoing:latex', 50)],
            energy: 400,
            id: `${id_prefix}dandelion_to_latex`
        },
        {
            inputs: [Item.of('#forge:ingots/aluminum'),  Ingredient.of('kubejs:press_wire_die')],
            outputs: [Item.of('kubejs:wire_aluminum', 1)],
            energy: 2400,
            id: `${id_prefix}wire_aluminum`
        },
        {
            inputs: [Item.of('#forge:ingots/lead'),  Ingredient.of('kubejs:press_wire_die')],
            outputs: [Item.of('kubejs:wire_lead', 1)],
            energy: 2400,
            id: `${id_prefix}wire_lead`
        },
        {
            inputs: [Item.of('#forge:ingots/copper'),  Ingredient.of('kubejs:press_wire_die')],
            outputs: [Item.of('kubejs:wire_copper', 1)],
            energy: 2400,
            id: `${id_prefix}wire_copper`
        },
        {
            inputs: [Item.of('#forge:ingots/electrum'),  Ingredient.of('kubejs:press_wire_die')],
            outputs: [Item.of('kubejs:wire_electrum', 1)],
            energy: 2400,
            id: `${id_prefix}wire_electrum`
        },
        {
            inputs: [Item.of('#forge:ingots/iron'),  Ingredient.of('kubejs:press_rod_die')],
            outputs: [Item.of('beyond_earth:iron_stick', 1)],
            energy: 2400,
            id: `${id_prefix}iron_stick`
        },
        {
            inputs: [Item.of('redstone_arsenal:flux_ingot')],
            outputs: [Item.of('kubejs:plate_electrum_flux', 1)],
            energy: 2400,
            id: `${id_prefix}plate_electrum_flux`
        },
        {
            inputs: [Item.of('kubejs:ingot_gelid_enderium')],
            outputs: [Item.of('kubejs:plate_gelid_enderium', 1)],
            energy: 2400,
            id: `${id_prefix}plate_gelid_enderium`
        },

    ];

    
    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
