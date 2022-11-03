
onEvent('recipes', event => {

    //event.remove({input: 'digital_resources:empty_card'})


    //aluminum
    event.shaped('digital_resources:aluminum_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/aluminum'
        })

    event.custom({
        "type": "digital_resources:digital_simulating",
        "ingredients": [
          {
            "item": "digital_resources:aluminum_card"
          }
        ],
        "output": {
          "item": "alltheores:aluminum_ingot"
        }
      })


    //brass
    event.shaped('digital_resources:brass_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/brass'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:brass_card"
              }
            ],
            "output": {
              "item": "alltheores:brass_ingot"
            }
          })

    event.shaped('digital_resources:bronze_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/bronze'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:bronze_card"
              }
            ],
            "output": {
              "item": "thermal:bronze_ingot"
            }
          })

    event.shaped('digital_resources:coal_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/coal'
        })

    event.shaped('digital_resources:constantan_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/constantan'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:constantan_card"
              }
            ],
            "output": {
              "item": "thermal:constantan_ingot"
            }
          })

    event.shaped('digital_resources:electrum_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/electrum'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:electrum_card"
              }
            ],
            "output": {
              "item": "thermal:electrum_ingot"
            }
          })

    event.shaped('digital_resources:lead_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/lead'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:lead_card"
              }
            ],
            "output": {
              "item": "thermal:lead_ingot"
            }
          })

    event.shaped('digital_resources:nickel_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/nickel'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:nickel_card"
              }
            ],
            "output": {
              "item": "thermal:nickel_ingot"
            }
          })

    event.shaped('digital_resources:osmium_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/osmium'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:osmium_card"
              }
            ],
            "output": {
              "item": "alltheores:osmium_ingot"
            }
          })

    event.shaped('digital_resources:platinum_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/platinum'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:platinum_card"
              }
            ],
            "output": {
              "item": "alltheores:platinum_ingot"
            }
          })

    event.shaped('digital_resources:silver_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/silver'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:silver_card"
              }
            ],
            "output": {
              "item": "thermal:silver_ingot"
            }
          })

    event.shaped('digital_resources:steel_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/steel'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:steel_card"
              }
            ],
            "output": {
              "item": "thermal:steel_ingot"
            }
          })

    event.shaped('digital_resources:tin_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/tin'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:tin_card"
              }
            ],
            "output": {
              "item": "alltheores:tin_ingot"
            }
          })

    event.shaped('digital_resources:uranium_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/uranium'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:uranium_card"
              }
            ],
            "output": {
              "item": "alltheores:uranium_ingot"
            }
          })

    event.shaped('digital_resources:zinc_card', [
        'BBB',
        'BCB',
        'BBB'],
        {
            C: 'digital_resources:empty_card',
            B: '#forge:storage_blocks/zinc'
        })

        event.custom({
            "type": "digital_resources:digital_simulating",
            "ingredients": [
              {
                "item": "digital_resources:zinc_card"
              }
            ],
            "output": {
              "item": "alltheores:zinc_ingot"
            }
          })

    event.shaped('digital_resources:empty_upgrade', [
        'NGN',
        'GRG',
        'NGN'],
        {
            N: 'minecraft:netherite_ingot',
            G: 'minecraft:gold_ingot',
            R: 'minecraft:redstone'
        })




})
