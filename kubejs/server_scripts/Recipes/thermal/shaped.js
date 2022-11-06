onEvent('recipes', e => {

  

  modifyShaped(e, 'thermal:energy_cell_frame', 1, ['ABA', 'CDC', 'ABA'], {
      A: '#forge:plates/lead',
      B: 'powah:dielectric_rod_horizontal',
      C: 'powah:dielectric_rod',
      D: '#forge:rods/electrum'
   })
	

  modifyShaped(e, 'thermal:redstone_servo', 1, ['A A', ' B ', 'A A'], {
      'A': 'minecraft:redstone',
      'B': '#forge:rods/iron'
   })

	modifyShaped(e, 'redstone_arsenal:flux_plating', 2, [' A ', 'ABA', ' A '], {
		A: '#kubejs:plate_electrum_flux',
		B: 'redstone_arsenal:flux_gem'
	})

  modifyShaped(e, 'thermal:flux_drill', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/iron',
    B: 'thermal:drill_head',
    C: 'mekanism:basic_control_circuit',
    D: 'mekanism:energy_tablet',
    E: 'industrialforegoing:plastic',
    F: 'kubejs:power_coil_gold'
  })

  modifyShaped(e, 'thermal:flux_saw', 1,  ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/iron',
    B: 'thermal:saw_blade',
    C: 'mekanism:basic_control_circuit',
    D: 'mekanism:energy_tablet',
    E: 'industrialforegoing:plastic',
    F: 'kubejs:power_coil_gold'
  })

  modifyShaped(e, 'thermal:flux_magnet', 1,  ['ABG', 'CDC', 'BFB'], {
    A: '#forge:dyes/red',
    G: '#forge:dyes/blue',
    B: '#forge:plates/lead',
    C: 'mekanism:basic_control_circuit',
    D: 'mekanism:energy_tablet',
    F: 'kubejs:power_coil_gold'
  })

  modifyShaped(e, 'thermal:device_water_gen', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/copper',
    B: 'minecraft:bucket',
    C: 'thermal:fluid_cell_frame',
    D: machineframe1,
    E: '#forge:plates/lead',
    F: '#forge:gears/iron'
  })

  modifyShaped(e, 'thermal:device_rock_gen', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/lead',
    B: 'thermal:drill_head',
    C: 'powah:thermoelectric_plate',
    D: machineframe1,
    E: '#forge:plates/invar',
    F: '#forge:gears/iron'
  })

  modifyShaped(e, 'thermal:device_collector', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/lead',
    B: 'thermal:flux_magnet',
    C: 'mekanism:personal_chest',
    D: machineframe1,
    E: '#forge:plates/invar',
    F: '#forge:gears/iron'
  })

  modifyShaped(e, 'thermal:device_tree_extractor', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/invar',
    B: 'thermal:saw_blade',
    C: 'thermal:fluid_cell_frame',
    D: machineframe1,
    E: '#minecraft:planks',
    F: '#forge:gears/iron'
  })

  modifyShaped(e, 'thermal:device_hive_extractor', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/invar',
    B: 'minecraft:bucket',
    C: 'thermal:fluid_cell_frame',
    D: machineframe1,
    E: '#minecraft:planks',
    F: '#forge:gears/iron'
  })

  modifyShaped(e, 'thermal:device_fisher', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/invar',
    B: 'minecraft:fishing_rod',
    C: '#forge:chests/wooden',
    D: machineframe1,
    E: '#minecraft:planks',
    F: '#forge:gears/iron'
  })

  modifyShaped(e, 'thermal:device_composter', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/invar',
    B: 'minecraft:composter',
    C: '#forge:chests/wooden',
    D: machineframe1,
    E: '#minecraft:planks',
    F: '#forge:gears/iron'
  })

  modifyShaped(e, 'thermal:device_nullifier', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/lead',
    B: 'minecraft:lava_bucket',
    C: '#forge:chests/wooden',
    D: machineframe1,
    E: '#forge:plates/invar',
    F: '#forge:gears/iron'
  })

  modifyShaped(e, 'thermal:device_potion_diffuser', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/lead',
    B: 'thermal:potion_infuser',
    C: 'thermal:fluid_cell_frame',
    D: machineframe1,
    E: '#forge:plates/invar',
    F: '#forge:gears/iron'
  })

  modifyShaped(e, 'thermal:tinker_bench', 1, ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/lead',
    B: 'thermal:rf_potato',
    C: 'thermal:energy_cell_frame',
    D: machineframe2,
    E: '#forge:plates/invar',
    F: 'thermal:rf_coil'
  })

  modifyShaped(e, 'thermal:charge_bench', 1, ['ABA', 'CDC', 'ECE'], {
    A: '#forge:plates/electrum',
    B: 'mekanism:chargepad',
    C: machineframe2,
    D: 'thermal:energy_cell_frame',
    E: '#forge:plates/lead'
  })


	

	
	
	

  function igneousExtruder(fluid, bottom, output) {
			e.custom({
					"type": "thermal:rock_gen",
					"adjacent": fluid,
					"below": bottom,
					"result": {"item": output}
				})
		}

		igneousExtruder('minecraft:water', 'minecraft:red_sandstone', 'minecraft:red_sand')
		igneousExtruder('minecraft:water', 'minecraft:nether_bricks', 'minecraft:netherrack')
		igneousExtruder('minecraft:water', 'minecraft:soul_soil', 'minecraft:soul_sand')
		igneousExtruder('minecraft:water', 'minecraft:polished_andesite', 'minecraft:andesite')
		igneousExtruder('minecraft:water', 'minecraft:polished_diorite', 'minecraft:diorite')
		igneousExtruder('minecraft:water', 'minecraft:polished_granite', 'minecraft:granite')
		igneousExtruder('minecraft:water', 'minecraft:end_stone_bricks', 'minecraft:end_stone')
		igneousExtruder('industrialforegoing:pink_slime', 'minecraft:slime_block', 'minecraft:slime_ball')


     

})
