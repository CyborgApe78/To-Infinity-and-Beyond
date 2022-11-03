
onEvent('recipes', e => {

  e.remove({id:'pocketstorage:tier1'})
  e.remove({id:'pocketstorage:tier2'})

  e.shaped('pocketstorage:psu_1', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:plates/iron',
    B: 'minecraft:piston',
    C: '#forge:chests',
    D: 'rftoolsstorage:storage_module0'
  })

  e.shaped('pocketstorage:psu_2', ['ACA', 'BDB', 'AEA'], {
    A: '#forge:plates/steel',
    B: 'minecraft:piston',
    C: '#forge:chests',
    D: 'pocketstorage:psu_1',
    E: 'rftoolsstorage:storage_module1'
  })

  e.shaped('pocketstorage:psu_2', ['ABA', 'CDC', 'ABA'], { 
      A: '#forge:plates/steel',
      B: '#forge:chests',
      C: '#forge:chests',
      D: 'rftoolsstorage:storage_module1'

  })
})
