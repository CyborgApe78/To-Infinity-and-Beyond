onEvent('recipes', (event) => {


    const id_prefix = 'infinity:industrialforegoing/laser_drill_fluid/';
    const recipes = [
        {
            output: '{FluidName:"kubejs:liquid_gelid_cryotheum",Amount:10}',
            rarity: [
                {
                    whitelist: {type: "minecraft:worldgen/biome",
                                values: [
                                "beyond_earth:glacio","beyond_earth:galacio_ice_spikes"]},
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 20,
                    weight: 8
                }
            ],
            pointer: 0,
            catalyst: { item: 'industrialforegoing:laser_lens11' },
            entity: 'minecraft:empty',
            id: `${id_prefix}cryotheum`
        },
        {
            output: '{FluidName:"kubejs:liquid_blazing_pyrotheum",Amount:10}',
            rarity: [
                {
                    whitelist: {type: "minecraft:worldgen/biome",
                                values: [
                                "beyond_earth:venus_desert",
                                "beyond_earth:infernal_venus_barrens"]},
                    blacklist: {  },
                    depth_min: 5,
                    depth_max: 20,
                    weight: 8
                }
            ],
            pointer: 0,
            catalyst: { item: 'industrialforegoing:laser_lens14' },
            entity: 'minecraft:empty',
            id: `${id_prefix}pyrotheum`
        },
          {
            output: '{FluidName:"industrialforegoing:meat",Amount:1000}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 256,
                    weight: 1
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.brown },
            entity: 'minecraft:cow',
            type: 'industrialforegoing:laser_drill_fluid',
            id: `${id_prefix}liquid_meat`
        },
         {
            output: '{FluidName:"minecraft:milk",Amount:1000}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 256,
                    weight: 1
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.white },
            entity: 'minecraft:cow',
            type: 'industrialforegoing:laser_drill_fluid',
            id: `${id_prefix}milk`
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
