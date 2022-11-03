
onEvent('recipes', e => {

  function maker(molten, output){
        e.recipes.custommachinery.custom_machine("custommachinery:rod_maker", 80)
            .requireFluid(Fluid.of(molten, 100))
            .requireEnergy(2000)
            .produceItem(output, "output1")
    }

    
    maker('kubejs:molten_iron', '#forge:rods/iron')
    maker('kubejs:molten_steel', '#forge:rods/steel')
    maker('kubejs:molten_gold', '#forge:rods/gold')
    maker('kubejs:molten_copper', '#forge:rods/copper')
    maker('kubejs:molten_tin', '#forge:rods/tin')
    maker('kubejs:molten_lead', '#forge:rods/lead')
    maker('kubejs:molten_silver', '#forge:rods/silver')
    maker('kubejs:molten_nickel', '#forge:rods/nickel')
    maker('kubejs:molten_bronze', '#forge:rods/bronze')
    maker('kubejs:molten_electrum', '#forge:rods/electrum')
    maker('kubejs:molten_invar', '#forge:rods/invar')
    maker('kubejs:molten_constantan', '#forge:rods/constantan')
    maker('kubejs:molten_signalum', '#forge:rods/signalum')
    maker('kubejs:molten_lumium', '#forge:rods/lumium')
    maker('kubejs:molten_enderium', '#forge:rods/enderium')
    maker('kubejs:molten_aluminum', '#forge:rods/aluminum')
    maker('kubejs:molten_iridium', '#forge:rods/iridium')
    maker('kubejs:molten_osmium', '#forge:rods/osmium')
    maker('kubejs:molten_platinum', '#forge:rods/platinum')
    maker('kubejs:molten_uranium', '#forge:rods/uranium')
    maker('kubejs:molten_zinc', '#forge:rods/zinc')
    maker('kubejs:molten_brass', '#forge:rods/brass')
  })
