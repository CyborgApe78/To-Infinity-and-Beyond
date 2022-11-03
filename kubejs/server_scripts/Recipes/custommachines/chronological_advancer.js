
onEvent('recipes', e => {


        e.recipes.custommachinery.custom_machine("custommachinery:chronological_advancer", 120)
            .requireTime("(,12000)")
            .requireFluid(Fluid.of("kubejs:liquid_cloud_seed", 5000))
            .requireItem(Item.of("minecraft:firework_rocket", 1))
            .requireEnergy(10000)
            .runCommandOnEnd("/time set night")
            .runCommandOnEnd("/summon minecraft:firework_rocket")

          e.recipes.custommachinery.custom_machine("custommachinery:chronological_advancer", 120)
              .requireTime("(12000,18000)")
              .requireFluid(Fluid.of("kubejs:liquid_sunshine", 5000))
              .requireItem(Item.of("minecraft:firework_rocket", 1))
              .requireEnergy(10000)
              .runCommandOnEnd("/time set day")
              .runCommandOnEnd("/summon minecraft:firework_rocket")

  })
