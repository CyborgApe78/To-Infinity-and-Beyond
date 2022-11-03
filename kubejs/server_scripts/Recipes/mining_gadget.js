onEvent('recipes', e => {
    removeRecipeByID(e, [
        'mininggadgets:mininggadget_simple', //MK1
        'mininggadgets:mininggadget_fancy',  //MK2
        'mininggadgets:mininggadget', //MK3
        'mininggadgets:modificationtable',
    ])
    //MK1
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "  AA ",
          "AABBC",
          " D BF",
          " DDFF",
          "   F "
        ],
        "key": {
          "A": {
            "item": "mininggadgets:upgrade_empty"
          },
          "B": {
            "item": "minecraft:gold_ingot"
          },
          "C": {
            "item": "minecraft:redstone"
          },
          "D": {
            "item": "minecraft:diamond"
          },
          "F": {
            "item": "minecraft:iron_ingot"
          }
        },
        "result": {
          "item": "mininggadgets:mininggadget_simple"
        }
    })
    //MK2
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "   AA",
          " AABB",
          "CD BB",
          " CCF ",
          "   F "
        ],
        "key": {
          "A": {
            "item": "mininggadgets:upgrade_empty"
          },
          "B": {
            "item": "minecraft:iron_ingot"
          },
          "C": {
            "item": "minecraft:diamond"
          },
          "D": {
            "item": "minecraft:redstone"
          },
          "F": {
            "item": "minecraft:gold_ingot"
          }
        },
        "result": {
          "item": "mininggadgets:mininggadget_fancy"
        }
    })
    //MK3
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "   A ",
          "BBCD ",
          "EEE D",
          "BBCCD",
          "   C "
        ],
        "key": {
          "A": {
            "item": "minecraft:redstone"
          },
          "B": {
            "item": "mininggadgets:upgrade_empty"
          },
          "C": {
            "item": "minecraft:iron_ingot"
          },
          "D": {
            "item": "minecraft:gold_ingot"
          },
          "E": {
            "item": "minecraft:diamond"
          }
        },
        "result": {
          "item": "mininggadgets:mininggadget"
        }
    })
    //modification table
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          " AAA ",
          " ABA ",
          "C   C",
          "CE EC",
          "CCCCC"
        ],
        "key": {
          "A": {
            "item": "mininggadgets:upgrade_empty"
          },
          "B": {
            "item": "rftoolsutility:screen"
          },
          "C": {
            "item": "minecraft:iron_ingot"
          },
          "E": {
            "item": "minecraft:redstone"
          }
        },
        "result": {
          "item": "mininggadgets:modificationtable"
        }
    })
})
