
onEvent('jei.hide.items', e => {
  console.log('jei remove stuff')

  e.hide([
    'custommachinery:box_creator_item',
    'custommachinery:machine_creator_item',
    /titanium:/,
    /mekanismadditions:black/,
    /mekanismadditions:blue/,
    /mekanismadditions:green/,
    /mekanismadditions:dark_red/,
    /mekanismadditions:orange/,
    /mekanismadditions:light_gray/,
    /mekanismadditions:gray/,
    /mekanismadditions:light_blue/,
    /mekanismadditions:lime/,
    /mekanismadditions:red/,
    /mekanismadditions:magenta/,
    /mekanismadditions:yellow/,
    /mekanismadditions:purple/,
    /mekanismadditions:brown/,
    /mekanismadditions:pink/,
    /mekanismadditions:cyan/,
    /mekanismadditions:aqua/,
    /ae2:facade/,
    /kubejs:\w+_bucket/,
    /thermal:\w+_bucket/,
    /thermal_extra:\w+_bucket/,
    /industrialforegoing:\w+_bucket/,
    /beyond_earth:\w+_bucket/,
    /mekanism:\w+_bucket/,
    /mekanismgenerators:\w+_bucket/,
    /mekanismmatter:\w+_bucket/,
    /ae2:memory_card_/,
    Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:4000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"COMMON",Special:0b}'),
    Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:16000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"UNCOMMON",Special:0b}'),
    Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:80000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"RARE",Special:0b}'),
    Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:480000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"EPIC",Special:0b}'),
    Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:3360000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"LEGENDARY",Special:0b}'),
    Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'),
    Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Selected:"ARTIFACT",Special:1b}'),
    Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:4000000L,Selected:"COMMON",Special:0b}'),
    Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:16000000L,Selected:"UNCOMMON",Special:0b}'),
    Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:80000000L,Selected:"RARE",Special:0b}'),
    Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:480000000L,Selected:"EPIC",Special:0b}'),
    Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:3360000000L,Selected:"LEGENDARY",Special:0b}'),
    Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:9223372036854775807L,Selected:"ARTIFACT",Special:0b}'),
    Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:9223372036854775807L,Selected:"ARTIFACT",Special:1b}'),
    Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:4000000L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"COMMON",Special:0b}'),
    Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:16000000L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"UNCOMMON",Special:0b}'),
    Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:80000000L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"RARE",Special:0b}'),
    Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:480000000L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"EPIC",Special:0b}'),
    Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:3360000000L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"LEGENDARY",Special:0b}'),
    Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"ARTIFACT",Special:0b}'),
    Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Plunger:0,Selected:"ARTIFACT",Special:1b}'),
    Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:4000000L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"COMMON",Special:0b}'),
    Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:16000000L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"UNCOMMON",Special:0b}'),
    Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:80000000L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"RARE",Special:0b}'),
    Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:480000000L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"EPIC",Special:0b}'),
    Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:3360000000L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"LEGENDARY",Special:0b}'),
    Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"ARTIFACT",Special:0b}'),
    Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"ARTIFACT",Special:1b}'),
  ])

  e.hide(Item.of('custommachinery:structure_creator', '{custommachinery:{}}'))
  e.hide(Item.of('extendedcrafting:recipe_maker', '{Shapeless:0b,Type:"Datapack"}'))
  e.hide(Item.of('extendedcrafting:recipe_maker', '{Shapeless:0b,Type:"CraftTweaker"}'))

  global.recipe_disable.forEach(item => {
    e.hide(item)
  })

  infinityTool.forEach(tool => {
    e.hide([
      Item.of(`industrialforegoing:infinity_${tool}`, '{CanCharge:1b,Energy:4000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"COMMON",Special:0b}'),
      Item.of(`industrialforegoing:infinity_${tool}`, '{CanCharge:1b,Energy:16000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"UNCOMMON",Special:0b}'),
      Item.of(`industrialforegoing:infinity_${tool}`, '{CanCharge:1b,Energy:80000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"RARE",Special:0b}'),
      Item.of(`industrialforegoing:infinity_${tool}`, '{CanCharge:1b,Energy:480000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"EPIC",Special:0b}'),
      Item.of(`industrialforegoing:infinity_${tool}`, '{CanCharge:1b,Energy:3360000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"LEGENDARY",Special:0b}'),
      Item.of(`industrialforegoing:infinity_${tool}`, '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'),
      Item.of(`industrialforegoing:infinity_${tool}`, '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Selected:"ARTIFACT",Special:1b}')


      ])
  })

  colors.forEach(color => {
    e.hide([
      
      `beyond_earth:flag_${color}`,
      `minecraft:${color}_terracotta`,
      `minecraft:${color}_candle`,
      `minecraft:${color}_shulker_box`,
      ])

    ae2cables.forEach(cable => {
      e.hide([
      `ae2:${color}_${cable}`
        ])})

    if (color !== 'white') {
      e.hide([
        
        `simplylight:illuminant_${color}_block`,
        `simplylight:illuminant_${color}_block_on`,
        `minecraft:${color}_bed`,
        `minecraft:${color}_wool`,
        `thermal:${color}_rockwool`,
        `minecraft:${color}_concrete_powder`,
        `minecraft:${color}_concrete`,
        `minecraft:${color}_carpet`,
        `minecraft:${color}_wool`,
        `minecraft:${color}_banner`,
        `minecraft:${color}_stained_glass`,
        `minecraft:${color}_stained_glass_pane`,
        `minecraft:${color}_shulker_box`,
      ])}
  })
})


onEvent('jei.hide.fluids', event => {
  console.log('jei hide fluid')
})


onEvent('jei.add.items', event => { //todo: not working
  console.log('jei add stuff')
  event.add('ae2:memory_card_purple')
  event.add(Item.of('appliedenergistics2:facade', {item:"minecraft:stone"}))
})
