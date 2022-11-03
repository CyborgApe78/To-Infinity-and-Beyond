
onEvent('recipes', e => {
  modifyShaped(e, 'shrink:shrinking_device', 1, ['ABA', 'CDC', 'AEA'], {
    A: '#forge:plates/lead',
    B: 'rftoolsutility:tablet_screen',
    C: 'mekanism:advanced_control_circuit',
    D: 'mekanism:energy_tablet',
    E: 'thermal:rf_coil'
  })
})
