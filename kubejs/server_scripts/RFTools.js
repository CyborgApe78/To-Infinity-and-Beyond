
onEvent('recipes', e => {

  e.remove({id:'rftoolsstorage:storage_module0'})
  e.remove({id:'rftoolsstorage:storage_module1'})
  e.remove({id:'rftoolsstorage:storage_module2'})
   

  modifyShaped(e, 'rftoolsstorage:modular_storage', 1, ['ABA', 'CDC', 'AEA'], {
    A: '#forge:plates/iron',
    B: 'minecraft:crafting_table',
    C: '#forge:chests',
    D: 'industrialforegoing:machine_frame_pity',
    E: 'thermal:redstone_servo'
  })

  e.shaped('rftoolsstorage:storage_module0', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:plates/iron',
    B: '#forge:chests',
    C: 'minecraft:piston'
  })

  e.shaped('rftoolsstorage:storage_module1', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:plates/steel',
    B: '#forge:chests',
    C: 'rftoolsstorage:storage_module0'
  })

  e.shaped('rftoolsstorage:storage_module1',
    ['ABA', 'BBB', 'ABA'], { 
      A: '#forge:plates/steel',
      B: '#forge:chests'
  })

})
