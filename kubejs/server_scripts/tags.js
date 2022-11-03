//priority: 1000
onEvent('tags.blocks', e => {
  e.add('forge:relocation_not_supported', ['minecraft:beehive', 'minecraft:bee_nest', /pipez:.*_pipe/, /functionalstorage:.+/, 'rftoolsutility:screen'])
  e.add('ae2:blacklisted/spatial','#forge:relocation_not_supported')
  e.add('forge:storage_blocks', [/kubejs:block_.*/, /extendedcrafting:.*_block/])
  e.add('forge:mineable/paxel', [/kubejs:block_.*/])

  e.add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
  e.add('forge:ores', ['#forge:ores/dimensionalshard'])
  //===== plants tag =====//
  e.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
  e.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
  e.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
  e.add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom'])
  e.add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
  e.add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus'])

  e.add('forge:storage_blocks', ['#forge:storage_blocks/uraninite', '#forge:storage_blocks/oratchalcum', '#forge:storage_blocks/nether_star'])
  e.add('forge:storage_blocks/nether_star', ['extendedcrafting:nether_star_block'])
  e.add('forge:storage_blocks/uraninite', 'powah:uraninite_block')

  e.remove('forge:chests/personal', 'mekanism:personal_chest')
  e.remove('forge:chests/electric', 'mekanism:personal_chest')
  e.remove('forge:chests', 'mekanism:personal_chest')
})

onEvent('tags.items', e => {
  e.add('forge:soul_sand', 'minecraft:soul_sand')
  e.add('forge:melons','minecraft:melon_slice')

  // fix raw block crafting for other mods
  mekanismMetals.forEach(metal => e.add(`forge:raw_ores/${metal}`, `mekanism:raw_${metal}`))

  e.add('forge:rods/all_metal', '#forge:rods/metal');
  e.add('forge:ingots', [/kubejs:ingot_.*/, /extendedcrafting:.*_ingot/])
  e.add('forge:nuggets', [/kubejs:nugget_.*/])
  e.add('forge:storage_blocks', [/kubejs:block_.*/, /extendedcrafting:.*_block/])

  e.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')

  e.add('forge:tridents',[/redstone_arsenal:.*_trident/])
  e.add('forge:shield',[/redstone_arsenal:.*_shield/])
  e.add('forge:bows',[/redstone_arsenal:.*_bow/, /mekanism:.*_bow/, /redstone_arsenal:.*_quiver/])
  e.add('forge:crossbows',[/redstone_arsenal:.*_crossbow/])
  e.add('forge:armor',[/mekanismtools:.*_helmet/, /mekanismtools:.*_chestplate/, /mekanismtools:.*_leggings/, /mekanismtools:.*_boots/, /redstone_arsenal:.*_helmet/, /redstone_arsenal:.*_chestplate/, /redstone_arsenal:.*_leggings/, /redstone_arsenal:.*_boots/])
  e.add('forge:axes', ['/.+_axe/', '/.+_paxel/', '/.+:axe_.+/', /thermal:flux_saw/])
  e.add('forge:pickaxes', ['/.+_pickaxe/', '/.+_paxel/', '/.+:pickaxe_.+/', /redstone_arsenal:.*_hammer/, /thermal:.*_drill/])
  e.add('forge:shovels', ['/.+_shovel/', '/.+_paxel/', '/.+:shovel_.+/', /redstone_arsenal:.*_excavator/, /thermal:.*_drill/])
  e.add('forge:swords', ['/.+_sword/', '/.+:sword_.+/'])
  e.add('forge:hoes', ['/.+_hoe/', '/.+:hoe_.+/'])

  e.add('forge:cheese',['#forge:cheeses','thermal:cheese_wedge'])
  e.add('forge:barrels', ['/.+barrel/'])

  e.add('minecraft:stone_tool_materials', ['#forge:stone', '#forge:cobblestone'])
  e.add('minecraft:stone_crafting_materials', ['#forge:stone', '#forge:cobblestone'])

  e.add('forge:plastic', ['mekanism:hdpe_sheet'])

  e.add('forge:gems/dimensionalshard', 'rftoolsbase:dimensionalshard')

  e.add('forge:ingots/conductive_iron', 'kubejs:ingot_conductive_iron')
  e.add('forge:ingots/construction_alloy', 'kubejs:ingot_dark_steel')
  e.add('forge:ingots/crude_steel', 'kubejs:ingot_crude_steel')
  e.add('forge:ingots/crystalline_alloy', 'kubejs:ingot_crystalline_alloy')
  e.add('forge:ingots/crystalline_pink_slime', 'kubejs:ingot_crystalline_pink_slime')
  e.add('forge:ingots/dark_steel', 'kubejs:ingot_dark_steel')
  e.add('forge:ingots/electrical_steel', 'kubejs:ingot_electrical_steel')
  e.add('forge:ingots/end_steel', 'kubejs:ingot_end_steel')
  e.add('forge:ingots/energetic_alloy', 'kubejs:ingot_energetic_alloy')
  e.add('forge:ingots/energetic_alloy', 'kubejs:ingot_energetic_alloy')
  e.add('forge:ingots/energetic_silver', 'kubejs:ingot_energetic_silver')
  e.add('forge:ingots/gelid_enderium', 'kubejs:ingot_gelid_enderium')
  e.add('forge:ingots/melodic_alloy', 'kubejs:ingot_melodic_alloy')
  e.add('forge:ingots/pulsating_iron', 'kubejs:ingot_pulsating_iron')
  e.add('forge:ingots/soularium', 'kubejs:ingot_soularium')
  e.add('forge:ingots/stellar_alloy', 'kubejs:ingot_stellar_alloy')
  e.add('forge:ingots/vibrant_alloy', 'kubejs:ingot_vibrant_alloy')
  e.add('forge:ingots/vivid_alloy', 'kubejs:ingot_vivid_alloy')

  //===== plants tag =====//
  e.add('misctags:biofuel2', ['#minecraft:saplings', '#minecraft:leaves', '#forge:seeds', 'minecraft:dried_kelp', 'minecraft:kelp', 'minecraft:seagrass', 'minecraft:grass'])
  e.add('misctags:biofuel4', ['#forge:fruits', 'minecraft:tall_grass', 'minecraft:nether_sprouts', 'minecraft:dried_kelp_block', 'minecraft:cactus', 'minecraft:sugar_cane', 'minecraft:weeping_vines', 'minecraft:twisting_vines', 'minecraft:vine', 'minecraft:melon_slice', 'minecraft:dead_bush'])
  e.add('misctags:biofuel5', ['#forge:vegetables', '#forge:cookies', '#forge:flour_plants', '#forge:mushrooms', '#forge:mushroom_stems', '#minecraft:small_flowers', 'minecraft:lily_pad', 'minecraft:sea_pickle', 'minecraft:shroomlight', 'minecraft:large_fern', 'minecraft:fern', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:carved_pumpkin', 'minecraft:nether_wart', 'minecraft:cocoa_beans'])
  e.add('misctags:biofuel7', ['#minecraft:wart_blocks', '#forge:mushroom_caps', 'minecraft:baked_potato', 'minecraft:hay_block', '#forge:bread'])
  e.add('misctags:biofuel8', ['#forge:cakes', 'minecraft:pumpkin_pie', '#minecraft:tall_flowers'])
  e.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
  e.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
  e.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
  e.add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom'])
  e.add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
  e.add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus'])
  //===== blocks tag =====//
  e.add('forge:storage_blocks/uraninite', 'powah:uraninite_block')
  e.add('forge:storage_blocks', '#forge:storage_blocks/uraninite')
  e.add('forge:storage_blocks/nether_star', ['extendedcrafting:nether_star_block'])
  e.add('forge:storage_blocks', ['#forge:storage_blocks/nether_star'])

  e.remove('forge:dyes/yellow', 'mekanism:dust_sulfur')
  e.remove('forge:chests/personal', 'mekanism:personal_chest')
  e.remove('forge:chests/electric', 'mekanism:personal_chest')
  e.remove('forge:chests', 'mekanism:personal_chest')
  e.remove('forge:dust', 'rftoolsbase:dimensionalshard')

  //gems//
  e.add('forge:gems', ['kubejs:crystal_ender', 'kubejs:crystal_glowstone', 'kubejs:crystal_redstone', 'kubejs:vibrant_crystal', 'kubejs:weather_crystal', 'kubejs:pulsating_crystal', 'kubejs:precient_crystal', 'kubejs:attractor_crystal', 'kubejs:ender_crystal', 'kubejs:gem_gelid_crystal', 'redstone_arsenal:flux_gem', 'powah:crystal_blazing', 'powah:crystal_niotic', 'powah:crystal_spirited', 'powah:crystal_nitro', 'rftoolsbase:dimensionalshard'])
  e.add('forge:gems/crystal_ender', 'kubejs:crystal_ender')
  e.add('forge:gems/crystal_glowstone', 'kubejs:crystal_glowstone')
  e.add('forge:gems/crystal_redstone', 'kubejs:crystal_redstone')
  e.add('forge:gems/vibrant', 'kubejs:vibrant_crystal')
  e.add('forge:gems/weather', 'kubejs:weather_crystal')
  e.add('forge:gems/pulsating', 'kubejs:pulsating_crystal')
  e.add('forge:gems/precient', 'kubejs:precient_crystal')
  e.add('forge:gems/attractor', 'kubejs:attractor_crystal')
  e.add('forge:gems/ender', 'kubejs:ender_crystal')
  e.add('forge:gems/gelid', 'kubejs:gem_gelid_crystal')
  e.add('forge:gems/flux', 'redstone_arsenal:flux_gem')
  e.add('forge:gems/blazing', 'powah:crystal_blazing')
  e.add('forge:gems/niotic', 'powah:crystal_niotic')
  e.add('forge:gems/spirited', 'powah:crystal_spirited')
  e.add('forge:gems/nitro', 'powah:crystal_nitro')

  //powder//
  e.add('forge:powder', 'minecraft:blaze_powder', 'thermal:blizz_powder', 'thermal:blitz_powder', 'thermal:basalz_powder')
  e.add('forge:powder/blaze', 'minecraft:blaze_powder')
  e.add('forge:powder/blizz', 'thermal:blizz_powder')
  e.add('forge:powder/blitz', 'thermal:blitz_powder')
  e.add('forge:powder/basalz', 'thermal:basalz_powder')

  //gear//
  e.add('forge:gears', ['redstone_arsenal:flux_gear'])
  e.add('forge:gears/flux', ['redstone_arsenal:flux_gear'])

  colors.forEach(color => {
    e.add('ae2:paint_balls_lumen', `ae2:${color}_lumen_paint_ball`)
  });

  e.add('forge:laser_lense', /industrialforegoing:laser_lens/)

});

onEvent('fluid.tags', (event) => {

    event.get('forge:latex').add(['thermal:latex']);
    event.get('forge:latex').add(['industrialforegoing:latex']);

    event.add('forge:latex', 'thermal:latex')
    event.add('forge:latex', 'industrialforegoing:latex')
});

onEvent('infuse_type.tags', (event) => {
    event.get('kubejs:certus').add(['kubejs:certus']);
    event.get('kubejs:ender').add(['kubejs:ender']);
    event.get('kubejs:blazing').add(['kubejs:blazing']);
    event.get('kubejs:silicon').add(['kubejs:silicon']);
});
