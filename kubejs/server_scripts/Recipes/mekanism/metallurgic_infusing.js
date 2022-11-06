onEvent('recipes', (event) => {
    const id_prefix = 'infinity:mekanism/metallurgic_infusing/';

    //TODO:amount not working
    //todo: move glowing to thermal?

    colors.forEach(color => {    
      const recipes = [
        {
            output: `mekanismadditions:${color}_plastic_glow`,
            input: `mekanismadditions:${color}_plastic`,
            infusionInput: 'kubejs:glowing',
            infusionAmount: 10,
            id: `${id_prefix}${color}_plastic_glow`
        },
        {
          output: `ae2:${color}_lumen_paint_ball`,
          input: `ae2:${color}_paint_ball`,
          infusionInput: 'kubejs:glowing',
          infusionAmount: 10,
          id: `${id_prefix}${color}_lumen_paint_ball`
       },
       {
          output: `mekanismadditions:${color}_reinforced_plastic`,
          input: `mekanismadditions:${color}_plastic`,
          infusionInput: 'mekanism:refined_obsidian',
          infusionAmount: 10,
          id: `${id_prefix}${color}_reinforced_plastic`
       },
     ];




        recipes.forEach((recipe) => {
          event.recipes.mekanism
              .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
              .id(recipe.id);
          });
      });

    const recipes = [
        {
            output: 'glassential:glass_redstone',
            input: '#forge:glass',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 10,
            id: `${id_prefix}glass_redstone`
        },
        {
            output: 'glassential:glass_light',
            input: '#forge:glass',
            infusionInput: 'kubejs:glowing',
            infusionAmount: 10,
            id: `${id_prefix}glass_light`
        },
        {
            output: Item.of('kubejs:ingot_quartz_enriched_iron', 4),
            input: '#forge:ingots/iron',
            infusionInput: 'kubejs:certus',
            infusionAmount: 10,
            id: `${id_prefix}ingot_quartz_enriched_iron`
        },
        {
            output: Item.of('powah:dielectric_paste', 32),
            input: '#forge:silicon',
            infusionInput: 'mekanism:carbon',
            infusionAmount: 10,
            id: `${id_prefix}dielectric_paste`
        },
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
            output: Item.of('thermal:rf_coil', 2),
            input: '#forge:ingots/gold',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 40,
            id: `${id_prefix}rf_coil`
        },
        {
            output: 'redstone_arsenal:flux_ingot',
            input: '#forge:ingots/electrum',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 40,
            id: `${id_prefix}flux_ingot`
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
            infusionAmount: 40,
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
          id: `${id_prefix}netherrack_to_crimson_nylium`
      },
      {
          output: 'extendedcrafting:ender_ingot',
          input: 'minecraft:iron_ingot',
          infusionInput: 'kubejs:ender',
          infusionAmount: 10,
          id: `${id_prefix}ender_ingot`
      },
      {
          output: 'extendedcrafting:redstone_ingot',
          input: '#forge:silicon',
          infusionInput: 'mekanism:redstone',
          infusionAmount: 10,
          id: `${id_prefix}redstone_ingot`
      },
      {
          output: 'ae2:charged_certus_quartz_crystal',
          input: 'thermal:lightning_charge',
          infusionInput: 'kubejs:certus',
          infusionAmount: 10,
          id: `${id_prefix}charged_certus_quartz_crystal`
      },
      {
          output: Item.of('fluxnetworks:flux_dust', 2),
          input: 'mekanism:dust_refined_obsidian',
          infusionInput: 'mekanism:redstone',
          infusionAmount: 10,
          id: `${id_prefix}flux_dust`
      },
      {
          output: Item.of('kubejs:power_coil_electrum', 2),
          input: '#forge:rods/electrum',
          infusionInput: 'mekanism:redstone',
          infusionAmount: 10,
          id: `${id_prefix}rf_coil_conductance`
      },
      {
          output: Item.of('kubejs:power_coil_gold', 2),
          input: '#forge:rods/gold',
          infusionInput: 'mekanism:redstone',
          infusionAmount: 10,
          id: `${id_prefix}rf_coil_reception`
      },
      {
          output: Item.of('kubejs:power_coil_silver', 2),
          input: '#forge:rods/silver',
          infusionInput: 'mekanism:redstone',
          infusionAmount: 10,
          id: `${id_prefix}rf_coil_transmission`
      },
      {
          output: Item.of('thermal:redstone_servo', 2),
          input: '#forge:rods/iron',
          infusionInput: 'mekanism:redstone',
          infusionAmount: 10,
          id: `${id_prefix}redstone_servo`
      },
      
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });

});
