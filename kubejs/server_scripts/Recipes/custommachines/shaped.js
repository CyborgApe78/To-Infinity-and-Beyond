onEvent('recipes', e => {

	e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:slice_n_splice"}'),  ['ABA', 'CDE', 'AFA'], {
		A: 'kubejs:ingot_soularium',
		B: 'thermal:fluid_cell_frame',
		C: 'thermal:saw_blade',
		D: machineframe3,
		E: 'thermal:drill_head',
		F: 'kubejs:power_coil_gold'
	})

	e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:soul_binder"}'),  ['ABA', 'CDC', 'AEA'], {
		A: 'kubejs:ingot_soularium',
		B: 'thermal:fluid_cell_frame',
		C: 'minecraft:crying_obsidian',
		D: machineframe4,
		E: 'kubejs:power_coil_gold'
	})


})

