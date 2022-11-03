
onEvent('recipes', e => {
  modifyShaped(e, 'buildinggadgets:gadget_building', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/aluminum',
    B: 'rftoolsutility:tablet_screen',
    C: 'mekanism:advanced_control_circuit',
    D: 'mekanism:energy_tablet',
    E: 'mekanism:alloy_infused',
    F: 'thermal:rf_coil'
  })

  modifyShaped(e, 'buildinggadgets:gadget_copy_paste', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/aluminum',
    B: 'rftoolsutility:tablet_screen',
    C: 'mekanism:advanced_control_circuit',
    D: 'mekanism:energy_tablet',
    E: 'ae2:cell_component_1k',
    F: 'thermal:rf_coil'
  })

  modifyShaped(e, 'buildinggadgets:gadget_exchanging', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/aluminum',
    B: 'rftoolsutility:tablet_screen',
    C: 'mekanism:advanced_control_circuit',
    D: 'thermal:flux_magnet',
    E: 'mekanism:alloy_infused',
    F: 'thermal:rf_coil'
  })

  modifyShaped(e, 'buildinggadgets:gadget_destruction', 1, ['ABA', 'CDG', 'EFE'], {
    A: '#forge:plates/steel',
    B: 'rftoolsutility:tablet_screen',
    C: 'mekanism:advanced_control_circuit',
    D: 'mekanism:energy_tablet',
    G: 'thermal:machine_null_augment',
    E: 'mekanism:alloy_infused',
    F: 'thermal:rf_coil'
  })
})
