onEvent('recipes', e => {

	modifyShaped(e, 'mekanism:energy_tablet', 2, ['ABA', 'CDC', 'AEA'], {
		A: '#forge:nuggets/lead',
	    B: 'powah:capacitor_basic',
	    C: 'mekanism:alloy_infused',
	    D: 'powah:dielectric_casing',
		E: 'kubejs:power_coil_electrum'
	})

	modifyShaped(e, 'mekanismadditions:white_plastic', 1, ['AA' , 'AA'], {
		A: 'mekanism:hdpe_sheet'
	})
});
