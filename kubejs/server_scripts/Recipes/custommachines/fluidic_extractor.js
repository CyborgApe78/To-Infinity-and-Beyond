
onEvent('recipes', e => {


  e.recipes.custommachinery.custom_machine("custommachinery:fluidic_extractor", 80)
      .requireItemTag("#forge:seeds", 1)
      .requireEnergy(800)
      .produceFluid(Fluid.of("kubejs:liquid_seed_oil", 50, "output1"))

  e.recipes.custommachinery.custom_machine("custommachinery:fluidic_extractor", 80)
      .requireItem(Item.of("minecraft:sunflower", 1))
      .requireEnergy(500)
      .produceFluid(Fluid.of("thermal_extra:sunflower_oil", 200, "output1"))
})
