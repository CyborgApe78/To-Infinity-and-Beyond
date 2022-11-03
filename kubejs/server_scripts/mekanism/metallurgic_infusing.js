onEvent('recipes', (event) => {
    const id_prefix = 'infinity:mekanism/metallurgic_infusing/';

    //TODO:amount not working

    const recipes = [
        {
            output: 'minecraft:crimson_nylium',
            input: 'minecraft:netherrack',
            infusionInput: 'mekanism:fungi',
            infusionAmount: 10,
            id: `${id_prefix}crimson_nylium`
        },
        {
            output: 'rftoolsbase:infused_enderpearl',
            input: 'minecraft:ender_pearl',
            infusionInput: 'kubejs:dimensional',
            infusionAmount: 100,
            id: `${id_prefix}infused_enderpearl`
        },
        {
            output: 'rftoolsbase:infused_diamond',
            input: 'minecraft:diamond',
            infusionInput: 'kubejs:dimensional',
            infusionAmount: 100,
            id: `${id_prefix}infused_diamond`
        },
        {
            output: 'thermal:rf_coil',
            input: '#forge:ingots/gold',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 40,
            id: `${id_prefix}rf_coil`
        },
        {
            output: 'thermal:redstone_servo',
            input: '#forge:ingots/iron',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 40,
            id: `${id_prefix}redstone_servo`
        },
        {
            output: 'kubejs:ingot_dark_steel',
            input: '#forge:ingots/steel',
            infusionInput: 'mekanism:refined_obsidian',
            infusionAmount: 40,
            id: `${id_prefix}dark_steel`
        },
        {
            output: 'ae2:quartz_glass',
            input: '#forge:glass',
            infusionInput: 'kubejs:certus',
            infusionAmount: 4000,
            id: `${id_prefix}quartz_glass`
        },
        {
            output: 'ae2:quartz_vibrant_glass',
            input: 'ae2:quartz_glass',
            infusionInput: 'kubejs:glowing',
            infusionAmount: 400,
            id: `${id_prefix}quartz_vibrant_glass`
        },
         {
          output: 'minecraft:crimson_nylium',
          input: 'minecraft:netherrack',
          infusionInput: 'mekanism:fungi',
          infusionAmount: 10,
          id: 'mekanism:metallurgic_infusing/netherrack_to_crimson_nylium'
      },
      {
          output: 'extendedcrafting:ender_ingot',
          input: 'minecraft:iron_ingot',
          infusionInput: 'kubejs:ender',
          infusionAmount: 10,
          id: 'mekanism:metallurgic_infusing/ender_ingot'
      },
      {
          output: 'extendedcrafting:redstone_ingot',
          input: '#forge:silicon',
          infusionInput: 'mekanism:redstone',
          infusionAmount: 10,
          id: 'mekanism:metallurgic_infusing/redstone_ingot'
      },
      {
          output: 'ae2:charged_certus_quartz_crystal',
          input: 'thermal:lightning_charge',
          infusionInput: 'kubejs:certus',
          infusionAmount: 10,
          id: 'mekanism:metallurgic_infusing/charged_certus_quartz_crystal'
      },
      {
          output: 'extendedcrafting:black_iron_ingot',
          input: 'minecraft:iron_ingot',
          infusionInput: 'kubejs:blazing',
          infusionAmount: 10,
          id: 'mekanism:metallurgic_infusing/black_iron_ingot'
      },
      {
          output: 'fluxnetworks:flux_dust',
          input: 'mekanism:dust_refined_obsidian',
          infusionInput: 'mekanism:redstone',
          infusionAmount: 10,
          id: 'mekanism:metallurgic_infusing/flux_dust'
      },
    ];

    colors.forEach(color => {
        const recipes = [{
            output: `ae2:${color}_lumen_paint_ball`,
            input: `ae2:${color}_paint_ball`,
            infusionInput: 'kubejs:glowing',
            infusionAmount: 10,
            id: `mekanism:metallurgic_infusing/${color}_lumen_paint_ball`
        }];
    });

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });

});
