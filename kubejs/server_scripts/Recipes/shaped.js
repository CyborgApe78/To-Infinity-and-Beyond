onEvent('recipes', e => {

  modifyShaped(e, 'travel_anchors:travel_staff', 1, ['  A', ' B ', 'B  '], {
    A: 'kubejs:ender_crystal',
    B: 'redstone_arsenal:flux_obsidian_rod'
  })

  modifyShaped(e, 'kubejs:laser_diode', 1, ['AB ', 'BCB', ' BD'], {
    A: 'minecraft:diamond',
    B: 'minecraft:redstone',
    C: powerframe1,
    D: 'kubejs:power_coil_silver',
  })

  modifyShaped(e, 'kubejs:power_coil_electrum', 1, [' AB', 'ACA', 'BA '], {
      A: 'minecraft:redstone',
      B: '#forge:nuggets/electrum',
      C: '#forge:rods/electrum'
   })

  modifyShaped(e, 'kubejs:power_coil_gold', 1, [' AB', 'ACA', 'BA '], {
      "A": 'minecraft:redstone',
      "B": '#forge:nuggets/gold',
      "C": '#forge:rods/gold'
   })

  modifyShaped(e, 'kubejs:power_coil_silver', 1, [' AB', 'ACA', 'BA '], {
      "A": 'minecraft:redstone',
      "B": '#forge:nuggets/silver',
      "C": '#forge:rods/silver'
   })

})
