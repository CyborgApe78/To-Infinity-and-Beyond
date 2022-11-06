onEvent('recipes', e => {

  modifyShaped(e, 'industrialforegoing:water_condensator', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plastic',
    B: 'mekanism:advanced_control_circuit',
    C: 'powah:capacitor_hardened',
    D: 'thermal:device_water_gen',
    E: '#forge:plates/steel',
    F: 'kubejs:power_coil_gold',
  })

  e.shaped( 'industrialforegoing:water_condensator', ['ABA', 'CDC', 'EFE'], {
      A: '#forge:plastic',
      B: 'mekanism:advanced_control_circuit',
      C: 'mekanism:advanced_control_circuit',
      D: 'industrialforegoing:machine_frame_simple',
      E: '#forge:plates/steel',
      F: 'kubejs:power_coil_gold'
    })

})
