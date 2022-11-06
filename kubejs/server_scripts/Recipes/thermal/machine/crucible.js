onEvent('recipes', (event) => {
    const id_prefix = 'infinity:thermal/crucible/';
    const recipes = [
        {
            output: Fluid.of('kubejs:molten_plastic', 400),
            input: 'mekanism:hdpe_sheet',
            energy: 5000,
            id: `${id_prefix}hdpe_sheet`
        },
        {
            output: Fluid.of('kubejs:molten_plastic', 100),
            input: 'industrialforegoing:plastic',
            energy: 5000,
            id: `${id_prefix}plastic`
        },          
        {
            output: Fluid.of('kubejs:molten_blitz', 200),
            input: 'thermal:blitz_powder',
            energy: 5000,
            id: `${id_prefix}blitz_powder`
        },
        {
            output: Fluid.of('kubejs:molten_blizz', 200),
            input: 'thermal:blizz_powder',
            energy: 5000,
            id: `${id_prefix}blizz_powder`
        },
        {
            output: Fluid.of('kubejs:molten_glass', 1000),
            input: '#forge:sand',
            energy: 2000,
            id: `${id_prefix}molten_glass`
        },
        {
            output: Fluid.of('kubejs:liquid_blazing_pyrotheum', 200),
            input: 'kubejs:dust_pyrotheum',
            energy: 8000,
            id: `${id_prefix}liquid_blazing_pyrotheum`
        },
        {
            output: Fluid.of('kubejs:liquid_gelid_cryotheum', 200),
            input: 'kubejs:dust_cryotheum',
            energy: 8000,
            id: `${id_prefix}liquid_gelid_cryotheum`
        },
        {
            output: Fluid.of('kubejs:liquid_zephyrean_aerotheum', 200),
            input: 'kubejs:dust_aerotheum',
            energy: 8000,
            id: `${id_prefix}liquid_zephyrean_aerotheum`
        },
        {
            output: Fluid.of('kubejs:liquid_tectonic_petrotheum', 200),
            input: 'kubejs:dust_petrotheum',
            energy: 8000,
            id: `${id_prefix}liquid_tectonic_petrotheum`
        },
        {
            output: Fluid.of('kubejs:liquid_gelid_cryotheum', 200),
            input: 'kubejs:dust_cryotheum',
            energy: 8000,
            id: `${id_prefix}liquid_gelid_cryotheum`
        },
        {
            output: Fluid.of('kubejs:liquid_slime', 100),
            input: '#forge:slimeballs',
            energy: 1200,
            id: `${id_prefix}liquid_slime`
        },
    ];


    recipes.forEach((recipe) => {
        event.recipes.thermal.crucible(recipe.output, recipe.input).energy(recipe.energy).id(recipe.id);
    });



    event.recipes.thermal.crucible(Fluid.of('kubejs:molten_aluminum', ingotToMolten), '#forge:ingots/aluminum').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_brass', ingotToMolten), '#forge:ingots/brass').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_bronze', ingotToMolten), '#forge:ingots/bronze').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_calorite', ingotToMolten), '#forge:ingots/calorite').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_constantan', ingotToMolten), '#forge:ingots/constantan').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_copper', ingotToMolten), '#forge:ingots/copper').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_desh', ingotToMolten), '#forge:ingots/desh').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_electrum', ingotToMolten), '#forge:ingots/electrum').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_enderium', ingotToMolten), '#forge:ingots/enderium').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_energetic_alloy', ingotToMolten), '#forge:ingots/energetic_alloy').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_fluix_steel', ingotToMolten), '#forge:ingots/fluix_steel').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_gold', ingotToMolten), '#forge:ingots/gold').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_invar', ingotToMolten), '#forge:ingots/invar').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_iron', ingotToMolten), '#forge:ingots/iron').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_lead', ingotToMolten), '#forge:ingots/lead').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_lumium', ingotToMolten), '#forge:ingots/lumium').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_netherite', ingotToMolten), '#forge:ingots/netherite').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_nickel', ingotToMolten), '#forge:ingots/nickel').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_osmium', ingotToMolten), '#forge:ingots/osmium').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_ostrum', ingotToMolten), '#forge:ingots/ostrum').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_refined_obsidian', ingotToMolten), '#forge:ingots/refined_obsidian').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_refined_glowstone', ingotToMolten), '#forge:ingots/refined_glowstone').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_rose_gold', ingotToMolten), '#forge:ingots/rose_gold').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_signalum', ingotToMolten), '#forge:ingots/signalum').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_silver', ingotToMolten), '#forge:ingots/silver').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_steel', ingotToMolten), '#forge:ingots/steel').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_uranium', ingotToMolten), '#forge:ingots/uranium').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_dragon_bronze', ingotToMolten), '#forge:ingots/dragon_bronze').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_dragon_enderium', ingotToMolten), '#forge:ingots/dragon_enderium').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_drownium', ingotToMolten), '#forge:ingots/drownium').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_nectium', ingotToMolten), '#forge:ingots/nectium').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_nebulium', ingotToMolten), '#forge:ingots/nebulium').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_polarium', ingotToMolten), '#forge:ingots/polarium').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_vukaium', ingotToMolten), '#forge:ingots/vukaium').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_zauvium', ingotToMolten), '#forge:ingots/zauvium').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_vibrant_alloy', ingotToMolten), '#forge:ingots/vibrant_alloy').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_zinc', ingotToMolten), '#forge:ingots/zinc').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_platinum', ingotToMolten), '#forge:ingots/platinum').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_tin', ingotToMolten), '#forge:ingots/tin').energy(1200);
  event.recipes.thermal.crucible(Fluid.of('kubejs:molten_iridium', ingotToMolten), '#forge:ingots/iridium').energy(1200);
});


    

 


  

 