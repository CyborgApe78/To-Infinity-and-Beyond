onEvent('recipes', e => {

  //===== ae2 ====//
  //ae2:creative_item_cell
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABDDDDDBA",
      "ABDCECDBA",
      "ABDEFEDBA",
      "ABDCECDBA",
      "ABDDDDDBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "megacells:mega_item_cell_housing"
      },
      "B": {
        "item": "megacells:cell_component_256m"
      },
      "C": {
        "item": "mekanism:creative_bin"
      },
      "D": {
        "item": "ae2:quantum_ring"
      },
      "E":{
        "item": "megacells:bulk_cell_component"
      },
      "F":{
        "item": "extendedcrafting:ultimate_singularity"
      }
    },
    "result": {
      "item": "ae2:creative_item_cell"
    }
  })
  //ae2:creative_fluid_cell
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABDDDDDBA",
      "ABDCECDBA",
      "ABDEFEDBA",
      "ABDCECDBA",
      "ABDDDDDBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "megacells:mega_fluid_cell_housing"
      },
      "B": {
        "item": "megacells:cell_component_256m"
      },
      "C": {
        "item": "mekanism:creative_fluid_tank"
      },
      "D": {
        "item": "ae2:quantum_ring"
      },
      "E":{
        "item": "megacells:bulk_cell_component"
      },
      "F":{
        "item": "extendedcrafting:ultimate_singularity"
      }
    },
    "result": {
      "item": "ae2:creative_fluid_cell"
    }
  })
  //appmek:creative_chemical_cell
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABDDDDDBA",
      "ABDCECDBA",
      "ABDEFEDBA",
      "ABDCECDBA",
      "ABDDDDDBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "megacells:mega_chemical_cell_housing"
      },
      "B": {
        "item": "megacells:cell_component_256m"
      },
      "C": {
        "item": "mekanism:creative_chemical_tank"
      },
      "D": {
        "item": "ae2:quantum_ring"
      },
      "E":{
        "item": "megacells:bulk_cell_component"
      },
      "F":{
        "item": "extendedcrafting:ultimate_singularity"
      }
    },
    "result": {
      "item": "appmek:creative_chemical_cell"
    }
  })
  //ae2:creative_energy_cell
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAADAAAA",
      "ABBCDCBBA",
      "ABIHDHIBA",
      "ACG E GCA",
      "DDDEFEDDD",
      "ACG E GCA",
      "ABIHDHIBA",
      "ABBCDCBBA",
      "AAAADAAAA"
    ],
    "key": {
      "A": {
        "item": "ae2:energy_cell"
      },
      "B": {
        "item": "ae2:dense_energy_cell"
      },
      "C": {
        "item": "mekanism:ultimate_induction_cell"
      },
      "D": {
        "item": "ae2:quantum_ring"
      },
      "E":{
        "item": "mekanism:ultimate_induction_provider"
      },
      "F":{
        "item": "extendedcrafting:ultimate_singularity"
      },
      "G":{
        "item": "powah:dielectric_rod"
      },
      "H":{
        "item": "powah:dielectric_rod_horizontal"
      },
      "I":{
        "item": "thermal:energy_cell_frame"
      }
    },
    "result": {
      "item": "ae2:creative_energy_cell"
    }
  })

  //===== building gadgets ====//
  //buildinggadgets:construction_paste_container_creative
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AA I I AA",
      "AAAAAAAAA",
      "ABCCCCCBA",
      "ABDDDDDBA",
      "ABFFGFFBA",
      "ABEEEEEBA",
      "ABHHHHHBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "mekanism:dynamic_tank"
      },
      "B": {
        "item": "buildinggadgets:construction_block_dense"
      },
      "C": {
        "item": "thermal:fluid_cell"
      },
      "D": {
        "item": "industrialforegoing:supreme_black_hole_tank"
      },
      "E":{
        "item": "mekanism:ultimate_fluid_tank"
      },
      "F":{
        "item": "thermal_extra:bigger_fluid_tank_augment"
      },
      "G":{
        "item": "extendedcrafting:ultimate_singularity"
      },
      "H":{
        "item": "ae2:sky_stone_tank"
      },
      "I":{
        "item": "mekanismgenerators:fusion_reactor_port"
      }

    },
    "result": {
      "item": "buildinggadgets:construction_paste_container_creative"
    }
  })

  //===== mekanism ====//
  //mekanism:creative_fluid_tank
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAIAIAAA",
      "ABBBBBBBA",
      "ABCCCCCBA",
      "ABDDDDDBA",
      "ABFFGFFBA",
      "ABEEEEEBA",
      "ABHHHHHBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "mekanism:dynamic_tank"
      },
      "B": {
        "item": "mekanism:structural_glass"
      },
      "C": {
        "item": "thermal:fluid_cell"
      },
      "D": {
        "item": "industrialforegoing:supreme_black_hole_tank"
      },
      "E":{
        "item": "mekanism:ultimate_fluid_tank"
      },
      "F":{
        "item": "thermal_extra:bigger_fluid_tank_augment"
      },
      "G":{
        "item": "extendedcrafting:ultimate_singularity"
      },
      "H":{
        "item": "ae2:sky_stone_tank"
      },
      "I":{
        "item": "mekanism:dynamic_valve"
      }

    },
    "result": {
      "item": "mekanism:creative_fluid_tank"
    }
  })
  //mekanism:creative_chemical_tank
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAIAIAAA",
      "ABBBBBBBA",
      "ABCCCCCBA",
      "ABDDDDDBA",
      "ABFFGFFBA",
      "ABEEEEEBA",
      "ABHHHHHBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "mekanismgenerators:fusion_reactor_frame"
      },
      "B": {
        "item": "mekanism:structural_glass"
      },
      "C": {
        "item": "thermal:fluid_cell"
      },
      "D": {
        "item": "industrialforegoing:supreme_black_hole_tank"
      },
      "E":{
        "item": "mekanism:ultimate_fluid_tank"
      },
      "F":{
        "item": "thermal_extra:bigger_fluid_tank_augment"
      },
      "G":{
        "item": "extendedcrafting:ultimate_singularity"
      },
      "H":{
        "item": "ae2:sky_stone_tank"
      },
      "I":{
        "item": "mekanismgenerators:fusion_reactor_port"
      }
    },
    "result": {
      "item": "mekanism:creative_chemical_tank"
    }
  })
  //mekanism:creative_bin
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAIAIAAA",
      "ABBBBBBBA",
      "ABCCCCCBA",
      "ABDDDDDBA",
      "ABFFGFFBA",
      "ABEEEEEBA",
      "ABHHHHHBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "mekanism:block_refined_obsidian"
      },
      "B": {
        "item": "mekanism:structural_glass"
      },
      "C": {
        "item": "thermal:fluid_cell"
      },
      "D": {
        "item": "industrialforegoing:supreme_black_hole_tank"
      },
      "E":{
        "item": "mekanism:ultimate_fluid_tank"
      },
      "F":{
        "item": "thermal_extra:bigger_fluid_tank_augment"
      },
      "G":{
        "item": "extendedcrafting:ultimate_singularity"
      },
      "H":{
        "item": "ae2:sky_stone_tank"
      },
      "I":{
        "item": "mekanism:dynamic_valve"
      }
    },
    "result": {
      "item": "mekanism:creative_bin"
    }
  })
  //mekanism:creative_energy_cube
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAIAIAAA",
      "ABBBBBBBA",
      "ABCCCCCBA",
      "ABDDDDDBA",
      "ABFFGFFBA",
      "ABEEEEEBA",
      "ABHHHHHBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "mekanism:induction_casing"
      },
      "B": {
        "item": "mekanism:structural_glass"
      },
      "C": {
        "item": "thermal:fluid_cell"
      },
      "D": {
        "item": "industrialforegoing:supreme_black_hole_tank"
      },
      "E":{
        "item": "mekanism:ultimate_fluid_tank"
      },
      "F":{
        "item": "thermal_extra:bigger_fluid_tank_augment"
      },
      "G":{
        "item": "extendedcrafting:ultimate_singularity"
      },
      "H":{
        "item": "ae2:sky_stone_tank"
      },
      "I":{
        "item": "mekanism:induction_port"
      }
    },
    "result": {
      "item": "mekanism:creative_energy_cube"
    }
  })


  //===== thermal =====//
  //thermal:fluid_tank_creative_augment
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABCCCCCBA",
      "ABDDDDDBA",
      "ABFFGFFBA",
      "ABEEEEEBA",
      "ABHHHHHBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "mekanism:dynamic_tank"
      },
      "B": {
        "item": "thermal:enderium_glass"
      },
      "C": {
        "item": "thermal:fluid_cell"
      },
      "D": {
        "item": "industrialforegoing:supreme_black_hole_tank"
      },
      "E":{
        "item": "mekanism:ultimate_fluid_tank"
      },
      "F":{
        "item": "thermal_extra:bigger_fluid_tank_augment"
      },
      "G":{
        "item": "mekanism:creative_fluid_tank"
      },
      "H":{
        "item": "ae2:sky_stone_tank"
      }

    },
    "result": {
      "item": "thermal:fluid_tank_creative_augment"
    }
  })
  //thermal:machine_catalyst_creative_augment
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "    A    ",
      "BCDAAADCB",
      "BCDEAEDCB",
      "BCDEFEDCB",
      "DDDEGEDDD",
      "BCDEFEDCB",
      "BCDEAEDCB",
      "BCDAAADCB",
      "    A    "
    ],
    "key": {
      "A": {
        "item": "thermal:enderium_gear"
      },
      "B": {
        "item": "extendedcrafting:ultimate_catalyst"
      },
      "C": {
        "item": "thermal:enderium_plate"
      },
      "D": {
        "item": "thermal:machine_catalyst_augment"
      },
      "E": {
        "item": "extendedcrafting:enhanced_ender_ingot"
      },
      "F": {
        "item": "extendedcrafting:redstone_ingot_block"
      },
      "G": {
        "item": "extendedcrafting:the_ultimate_catalyst"
      }
    },
    "result": {
      "item": "thermal:machine_catalyst_creative_augment"
    }
  })
  //thermal:machine_efficiency_creative_augment
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "       AA",
      "     BBA ",
      "     BB  ",
      "  CCCDC  ",
      "  CDEDC  ",
      "  CDCCC  ",
      "  BB     ",
      " ABB     ",
      "AA       "
    ],
    "key": {
      "A": {
        "item": "thermal:enderium_plate"
      },
      "B": {
        "item": "thermal:enderium_gear"
      },
      "C": {
        "item": "thermal:machine_efficiency_augment"
      },
      "D": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "E": {
        "item": "extendedcrafting:the_ultimate_ingot"
      }
    },
    "result": {
      "item": "thermal:machine_efficiency_creative_augment"
    }
  })
  //thermal:rf_coil_creative_augment
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "BBCBBBDBB",
      "EEEFGEEEE",
      "EHFEGEIJI",
      "EFEFKEEEE",
      "EELFGEMFI",
      "EIEFGENNO",
      "EIIEPEONN",
      "EIIEOEOOO"
    ],
    "key": {
      "A": {
        "type": "forge:nbt",
        "item": "mekanism:energy_tablet",
        "count": 1,
        "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"1000000\"}]}}"
      },
      "B": {
        "item": "thermal:enderium_plate"
      },
      "C": {
        "item": "thermal:dynamo_lapidary"
      },
      "D": {
        "item": "thermal:dynamo_numismatic"
      },
      "E": {
        "item": "thermal:signalum_ingot"
      },
      "F": {
        "item": "thermal:redstone_servo"
      },
      "G": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "H": {
        "item": "thermal:dynamo_magmatic"
      },
      "I": {
        "item": "thermal:rf_coil"
      },
      "J": {
        "item": "thermal:dynamo_compression"
      },
      "K": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "L": {
        "item": "thermal:dynamo_gourmand"
      },
      "M": {
        "item": "thermal:dynamo_disenchantment"
      },
      "N": {
        "item": "thermal:enderium_ingot"
      },
      "O": {
        "item": "thermal:upgrade_augment_3"
      },
      "P": {
        "item": "thermal:dynamo_stirling"
      }
    },
    "result": {
      "item": "thermal:rf_coil_creative_augment"
    }
  })
})
