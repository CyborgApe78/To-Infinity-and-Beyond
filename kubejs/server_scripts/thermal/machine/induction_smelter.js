onEvent('recipes', (event) => {

    const id_prefix = 'infinity:thermal/smelter/';

    var data = {
        recipes: [
            {
                inputs: [Item.of('industrialforegoing:dryrubber', 2), '#forge:dusts/sulfur'],
                outputs: [Item.of('thermal:cured_rubber', 2)],
                id: `${id_prefix}cured_rubber`
            },
            {
                inputs: ['minecraft:ender_pearl', 'minecraft:iron_ingot'],
                outputs: [Item.of('kubejs:ingot_pulsating_iron', 1)],
                id: `${id_prefix}ingot_pulsating_iron`
            },
            {
                inputs: ['minecraft:glowstone_dust', 'minecraft:redstone', 'minecraft:gold_ingot'],
                outputs: [Item.of('kubejs:ingot_energetic_alloy', 1)],
                id: `${id_prefix}ingot_energetic_alloy`
            },
            {
                inputs: ['minecraft:ender_pearl', 'minecraft:iron_ingot'],
                outputs: [Item.of('kubejs:ingot_pulsating_iron', 1)],
                id: `${id_prefix}ingot_pulsating_iron`
            },
            {
                inputs: ['minecraft:redstone', 'minecraft:iron_ingot'],
                outputs: [Item.of('kubejs:ingot_conductive_iron', 1)],
                id: `${id_prefix}ingot_conductive_iron`
            },
            {
                inputs: ['minecraft:ender_pearl', 'kubejs:ingot_energetic_alloy'],
                outputs: [Item.of('kubejs:ingot_vibrant_alloy', 1)],
                id: `${id_prefix}ingot_vibrant_alloy`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.thermal.smelter(recipe.outputs, recipe.inputs);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });

     event.recipes.thermal.smelter('kubejs:ingot_dark_steel', ['minecraft:obsidian', '#forge:ingots/steel']).energy(800);
  event.recipes.thermal.smelter('kubejs:ingot_soularium', ['minecraft:soul_sand', '#forge:ingots/gold']).energy(800);
  event.recipes.thermal.smelter('kubejs:ingot_end_steel', ['minecraft:end_stone', 'kubejs:ingot_dark_steel', 'minecraft:obsidian']).energy(800);
  event.recipes.thermal.smelter('kubejs:ingot_electrical_steel', ['#forge:silicon', '#forge:ingots/steel']).energy(800);
  event.recipes.thermal.smelter('kubejs:ingot_gelid_enderium', ['kubejs:dust_cryotheum', '#forge:ingots/enderium']).energy(800);

});



 