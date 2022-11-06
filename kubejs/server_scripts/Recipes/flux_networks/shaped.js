onEvent('recipes', (e) => {
 
    modifyShaped(e, 'fluxnetworks:flux_core', 8, ['ABA', 'BCB', 'ABA'], {
    A: 'fluxnetworks:flux_dust',
    B: '#forge:obsidian',
    C: 'powah:ender_core'
    })

    modifyShaped(e, 'fluxnetworks:basic_flux_storage', 1, ['BBB', 'GXG', 'BBB'], {
    B: 'fluxnetworks:flux_block',
    G: '#forge:glass_panes',
    X: 'thermal:energy_cell'
     })

    modifyShaped(e, 'fluxnetworks:flux_block', 1, ['FCF', 'CXC', 'FCF'], {
    C: 'fluxnetworks:flux_core',
    F: 'fluxnetworks:flux_dust',
    X: 'thermal:rf_potato'
     })

    modifyShaped(e,'fluxnetworks:flux_controller', 1, ['ABA', 'CDC', 'AAA'], {
    A: 'fluxnetworks:flux_block',
    B: 'fluxnetworks:flux_core',
    C: 'fluxnetworks:flux_dust',
    D: 'powah:player_transmitter_nitro'
  })
});
