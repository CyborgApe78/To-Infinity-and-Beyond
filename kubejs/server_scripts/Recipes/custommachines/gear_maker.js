
onEvent('recipes', e => {

  function gear(molten, gear){
        e.recipes.custommachinery.custom_machine("custommachinery:gear_maker", 80)
            .requireFluid(Fluid.of(molten, 200))
            .requireEnergy(2000)
            .produceItem(gear, "output1")
    }

    gear('kubejs:molten_flux', '#forge:gears/flux')
    gear('kubejs:molten_iron', '#forge:gears/iron')
    gear('kubejs:molten_steel', '#forge:gears/steel')
    gear('kubejs:molten_rose_gold', '#forge:gears/rose_gold')
    gear('kubejs:molten_gold', '#forge:gears/gold')
    gear('kubejs:molten_copper', '#forge:gears/copper')
    gear('kubejs:molten_netherite', '#forge:gears/netherite')
    gear('kubejs:molten_tin', '#forge:gears/tin')
    gear('kubejs:molten_lead', '#forge:gears/lead')
    gear('kubejs:molten_silver', '#forge:gears/silver')
    gear('kubejs:molten_nickel', '#forge:gears/nickel')
    gear('kubejs:molten_bronze', '#forge:gears/bronze')
    gear('kubejs:molten_electrum', '#forge:gears/electrum')
    gear('kubejs:molten_invar', '#forge:gears/invar')
    gear('kubejs:molten_constantan', '#forge:gears/constantan')
    gear('kubejs:molten_signalum', '#forge:gears/signalum')
    gear('kubejs:molten_lumium', '#forge:gears/lumium')
    gear('kubejs:molten_enderium', '#forge:gears/enderium')
    gear('thermal_extra:dragon_bronze', '#forge:gears/dragon_bronze')
    gear('thermal_extra:dragon_enderium', '#forge:gears/dragon_enderium')
    gear('thermal_extra:vukaium', '#forge:gears/vukaium')
    gear('thermal_extra:nebulium', '#forge:gears/nebulium')
    gear('thermal_extra:nectium', '#forge:gears/nectium')
    gear('thermal_extra:polarium', '#forge:gears/polarium')
    gear('thermal_extra:zauvium', '#forge:gears/zauvium')
    gear('thermal_extra:drownium', '#forge:gears/drownium')
    gear('kubejs:molten_aluminum', '#forge:gears/aluminum')
    gear('kubejs:molten_iridium', '#forge:gears/iridium')
    gear('kubejs:molten_osmium', '#forge:gears/osmium')
    gear('kubejs:molten_platinum', '#forge:gears/platinum')
    gear('kubejs:molten_uranium', '#forge:gears/uranium')
    gear('kubejs:molten_zinc', '#forge:gears/zinc')
    gear('kubejs:molten_brass', '#forge:gears/brass')
  })