onEvent('recipes', (event) => {
    const id_prefix = 'infinity:mekanism/painting/';


    colors.forEach(color => {    
       event.custom({
          "type": "mekanism:painting",
          "chemicalInput": {
            "amount": 32,
            "pigment": `mekanism:${color}`
          },
          "itemInput": {
            "ingredient": {
              "item": `ae2:matter_ball`
            }
          },
          "output": {
            "item": `ae2:${color}_paint_ball`
          }
        });

       event.custom({
          "type": "mekanism:painting",
          "chemicalInput": {
            "amount": 32,
            "pigment": `mekanism:${color}`
          },
          "itemInput": {
            "ingredient": {
              "tag": `ae2:paint_balls`
            }
          },
          "output": {
            "item": `ae2:${color}_paint_ball`
          }
        });

       event.custom({
          "type": "mekanism:painting",
          "chemicalInput": {
            "amount": 32,
            "pigment": `mekanism:${color}`
          },
          "itemInput": {
            "ingredient": {
              "tag": `ae2:paint_balls_lumen`
            }
          },
          "output": {
            "item": `ae2:${color}_lumen_paint_ball`
          }
        });
        
        event.custom({
          "type": "mekanism:painting",
          "chemicalInput": {
            "amount": 32,
            "pigment": `mekanism:${color}`
          },
          "itemInput": {
            "ingredient": {
              "tag": `ae2:memory_cards`
            }
          },
          "output": {
            "item": `ae2:memory_card_${color}`
          }
        });

        event.custom({
          "type": "mekanism:painting",
          "chemicalInput": {
            "amount": 32,
            "pigment": `mekanism:${color}`
          },
          "itemInput": {
            "ingredient": {
              "tag": `thermal:rockwool`
            }
          },
          "output": {
            "item": `thermal:${color}_rockwool`
          }
        });

         event.custom({
          "type": "mekanism:painting",
          "chemicalInput": {
            "amount": 256,
            "pigment": `mekanism:${color}`
          },
          "itemInput": {
            "ingredient": {
              "tag": `minecraft:shulker_boxes`
            }
          },
          "output": {
            "item": `minecraft:${color}_shulker_box`
          }
        });
        

        ae2cables.forEach(cable => {
            event.custom({
              "type": "mekanism:painting",
              "chemicalInput": {
                "amount": 32,
                "pigment": `mekanism:${color}`
              },
              "itemInput": {
                "ingredient": {
                  "tag": `ae2:${cable}`
                }
              },
              "output": {
                "item": `ae2:${color}_${cable}`
              }
            });
        });

        if (color !== 'white') {
             event.custom(
              {
                "type": "mekanism:painting",
                "chemicalInput": {
                  "amount": 32,
                  "pigment": `mekanism:${color}`
                },
                "itemInput": {
                  "ingredient": {
                    "tag": 'simplylight:any_lamp_off'
                  }
                },
                "output": {
                  "item": `simplylight:illuminant_${color}_block`
                }
              });
              event.custom({
                "type": "mekanism:painting",
                "chemicalInput": {
                  "amount": 32,
                  "pigment": `mekanism:${color}`
                },
                "itemInput": {
                  "ingredient": {
                    "tag": 'simplylight:any_lamp_on'
                  }
                },
                "output": {
                  "item": `simplylight:illuminant_${color}_block_on`
                }
              });
        };
    });

});

