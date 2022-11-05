onEvent('recipes', e => {
  e.shaped('mekanism:atomic_disassembler', ['RER', 'RUR', ' V '], {
    E: 'mekanism:energy_tablet',
    R: '#mekanism:alloys/reinforced',
    U: '#forge:circuits/ultimate',
    V: 'redstone_arsenal:flux_pickaxe'
  }).id(`kubejs:mekanism/atomic_disassembler`)
  e.shaped(Item.of('mekanism:mekasuit_helmet', {HideFlags: 2}), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'redstone_arsenal:flux_helmet'
  }).id(`kubejs:mekanism/mekasuit_helmet`)
  e.shaped(Item.of('mekanism:mekasuit_bodyarmor', {HideFlags: 2}), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'redstone_arsenal:flux_chestplate'
  }).id(`kubejs:mekanism/mekasuit_bodyarmor`)
  e.shaped(Item.of('mekanism:mekasuit_pants', {HideFlags: 2}), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'redstone_arsenal:flux_leggings'
  }).id(`kubejs:mekanism/mekasuit_pants`)
  e.shaped(Item.of('mekanism:mekasuit_boots', {HideFlags: 2}), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'redstone_arsenal:flux_boots'
  }).id(`kubejs:mekanism/mekasuit_boots`)

  removeRecipeByID(e, [
    'mekanism:atomic_disassembler',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots',
  ])

  //===== add compatibility to other mods =====//

    e.recipes.mekanism.crushing('9x minecraft:bone_meal', 'minecraft:bone_block')

    //===== biofuel crushing recipes =====//
    e.recipes.mekanism.crushing('2x mekanism:bio_fuel', '#misctags:biofuel2')
    e.recipes.mekanism.crushing('4x mekanism:bio_fuel', '#misctags:biofuel4')
    e.recipes.mekanism.crushing('5x mekanism:bio_fuel', '#misctags:biofuel5')
    e.recipes.mekanism.crushing('7x mekanism:bio_fuel', '#misctags:biofuel7')
    e.recipes.mekanism.crushing('8x mekanism:bio_fuel', '#misctags:biofuel8')

    e.remove({id:'mekanism:injecting/gunpowder_to_sulfur'})


    //===== steel casing to pity machine frame =====//
    //pityitem.listOf([  'mekanism:crusher',  'mekanism:energized_smelter',  'mekanism:electric_pump','mekanism:chemical_infuser']).forEach( pityitem =>{
    //  e.replaceInput({output: pityitem}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_pity')})
  //  e.replaceInput({output: 'mekanism:metallurgic_infuser'}, '#forge:ingots/osmium', 'industrialforegoing:machine_frame_pity')
    //===== steel casing to simple machine frame =====//
  //  simpleitem.listOf([  'mekanism:electric_pump','mekanism:enrichment_chamber',  'mekanism:teleporter',  'mekanism:precision_sawmill','mekanismgenerators:gas_burning_generator',  'mekanism:osmium_compressor',  'mekanism:painting_machine',  'mekanism:chemical_infuser'  ]).forEach( simpleitem =>{
    //  e.replaceInput({output: simpleitem}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_simple')  })
    //===== steel casing to advanced machine frame =====//
  //  advanceditem.listOf(['mekanismmatter:scanner','mekanismmatter:matter_analyser','mekanism:laser','mekanism:pigment_mixer','mekanism:security_desk',  'mekanism:solar_neutron_activator','mekanism:combiner'  ]).forEach( advanceditem =>{
  //    e.replaceInput({output: advanceditem}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')  })
    //===== steel casing to supreme machine frame =====//
  //  supremeitem.listOf(['mekanism:antiprotonic_nucleosynthesizer','mekanismgenerators:fusion_reactor_frame','mekanismmatter:antimatter_synthesizer',    'mekanismmatter:mass_fabricator',    'mekanism:chemical_crystallizer',    'mekanism:chemical_dissolution_chamber',    'mekanism:chemical_washer',  'mekanism:modification_station',  'mekanism:chemical_dissolution_chamber',  'mekanism:chemical_washer',  'mekanism:chemical_crystallizer'  ]).forEach( supremeitem =>{
    //  e.replaceInput({output: supremeitem}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_supreme')  })
  //===== balancing =====//
    //atomic disassembler
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "    AAB  ",
        "   A AD  ",
        "   FGA DB",
        "   FGIAAA",
        "   JFGG A",
        "  J JFFA ",
        " J J     ",
        "J J      ",
        "JJ       "
      ],
      "key": {
        "A": {
          "item": "fluxnetworks:flux_dust"
        },
        "B": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "D": {
          "item": "mekanism:alloy_atomic"
        },
        "F": {
          "item": "mekanism:teleportation_core"
        },
        "G": {
          "item": "mekanism:energy_tablet"
        },
        "I": {
          "item": "industrialforegoing:machine_frame_supreme"
        },
        "J": {
          "item": "mekanism:hdpe_stick"
        }
      },
      "result": {
        "item": "mekanism:atomic_disassembler"
      }
    })
    //entangloporter
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBD",
        "BE GB",
        "CH HC",
        "BJ KB",
        "ABCBD"
      ],
      "key": {
        "A": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "B": {
          "item": "mekanism:alloy_atomic"
        },
        "C": {
          "item": "mekanism:teleportation_core"
        },
        "D": {
          "item": "mekanism:ultimate_tier_installer"
        },
        "E": {
          "item": "mekanism:ultimate_universal_cable"
        },
        "G": {
          "item": "mekanism:ultimate_mechanical_pipe"
        },
        "H": {
          "item": "industrialforegoing:machine_frame_supreme"
        },
        "J": {
          "item": "mekanism:ultimate_logistical_transporter"
        },
        "K": {
          "item": "mekanism:ultimate_pressurized_tube"
        }
      },
      "result": {
        "item": "mekanism:quantum_entangloporter"
      }
    })
    //digital miner
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " A A ",
        "A   A",
        "DEFED",
        " GHG ",
        " G G "
      ],
      "key": {
        "A": {
          "item": "mekanism:alloy_atomic"
        },
        "D": {
          "item": "mekanism:logistical_sorter"
        },
        "E": {
          "item": "industrialforegoing:machine_frame_supreme"
        },
        "F": {
          "item": "mekanism:robit"
        },
        "G": {
          "item": "mekanism:teleportation_core"
        },
        "H": {
          "item": "thermal:enderium_ingot"
        }
      },
      "result": {
        "item": "mekanism:digital_miner"
      }
    })
    //free runners
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " A A ",
        "AB BA",
        "A   A",
        "A   A",
        " E E "
      ],
      "key": {
        "A": {
          "item": "industrialforegoing:plastic"
        },
        "B": {
          "type": "forge:nbt",
          "item": "mekanism:energy_tablet",
          "count": 1,
          "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"1000000\"}]}}"
        },
        "E": {
          "item": "mekanism:hdpe_stick"
        }
      },
      "result": {
        "item": "mekanism:free_runners"
      }
    })
    removeRecipeByOutput(e, [
      'mekanism:atomic_disassembler',
      'mekanism:quantum_entangloporter',
      'mekanism:digital_miner',
      'mekanism:free_runners'
    ])
})
