onEvent('recipes', e => {

	modifyShaped(e, 'powah:dielectric_rod', 4, ['AAA', 'BBB', 'AAA'], {
		A: 'powah:dielectric_paste',
		B: '#forge:rods/iron'
	})

	modifyShaped(e, 'powah:dielectric_rod_horizontal', 4, ['ABA', 'ABA', 'ABA'], {
		A: 'powah:dielectric_paste',
		B: '#forge:rods/iron'
	})

	modifyShaped(e, 'powah:dielectric_casing', 2, ['ABA', 'C C', 'ABA'], {
		A: '#forge:plates/iron',
     	B: 'powah:dielectric_rod_horizontal',
     	C: 'powah:dielectric_rod'
	})

	modifyShaped(e, 'powah:capacitor_basic', 4, [' AB', 'CDB', 'CA '], {
		A: 'powah:dielectric_paste',
		B: '#forge:rods/copper',
		C: '#forge:rods/nickel',
		D: 'minecraft:redstone',
	})

  modifyShaped(e, 'powah:energy_cell_basic', 1, ['ABA', 'CDC', 'AEA'], {
		A: '#forge:plates/lead',
	  B: 'powah:capacitor_basic',
	  C: 'mekanism:alloy_infused',
	  D: powerframe2,
		E: 'kubejs:power_coil_electrum'
	})

	modifyShaped(e, 'powah:energy_cable_basic', 8, ['AAA', 'BBB', 'AAA'], {
		A: 'thermal:cured_rubber',
	  B: 'kubejs:wire_copper'
	})

	modifyShaped(e, 'powah:ender_gate_basic', 1, ['ABA', 'CDC', 'ACA'], {
		A: 'thermal:cured_rubber',
	  	B: 'fluxnetworks:flux_core',
	 	C: '#forge:ingots/flux',
	  D: powerframe1
	})

	modifyShaped(e, 'powah:energizing_rod_basic', 1, [' B ', 'CDC', 'AEA'], {
		A: 'thermal:cured_rubber',
	  B: 'kubejs:laser_diode',
	  C: '#forge:ingots/flux',
	  D: 'powah:capacitor_basic',
	  E: 'kubejs:power_coil_gold'
	})

	modifyShaped(e, 'powah:solar_panel_basic', 1, ['AAA', 'BCB', 'BDB'], {
		A: 'mekanismgenerators:solar_panel',
	  B: 'thermal:cured_rubber',
	  C: 'powah:capacitor_basic',
	  D: 'kubejs:power_coil_silver'
	})



})

