
onEvent('recipes', e => {


        e.recipes.custommachinery.custom_machine("custommachinery:atmospheric_injector", 120)
            .requireWeatherOnMachine("clear")
            .requireFluid(Fluid.of("kubejs:liquid_cloud_seed_concentrated", 5000))
            .requireItem(Item.of("minecraft:firework_rocket", 1))
            .requireEnergy(10000)
            .runCommandOnEnd("/weather thunder")
            .runCommandOnEnd("/summon minecraft:firework_rocket")


        e.recipes.custommachinery.custom_machine("custommachinery:atmospheric_injector", 120)
            .requireWeatherOnMachine("clear")
            .requireFluid(Fluid.of("kubejs:liquid_cloud_seed", 5000))
            .requireItem(Item.of("minecraft:firework_rocket", 1))
            .requireEnergy(10000)
            .runCommandOnEnd("/weather rain")
            .runCommandOnEnd("/summon minecraft:firework_rocket")

          e.recipes.custommachinery.custom_machine("custommachinery:atmospheric_injector", 120)
              .requireWeatherOnMachine("rain")
              .requireFluid(Fluid.of("kubejs:liquid_sunshine", 5000))
              .requireItem(Item.of("minecraft:firework_rocket", 1))
              .requireEnergy(10000)
              .runCommandOnEnd("/weather clear")
              .runCommandOnEnd("/summon minecraft:firework_rocket")

          e.recipes.custommachinery.custom_machine("custommachinery:atmospheric_injector", 120)
              .requireWeatherOnMachine("thunder")
              .requireFluid(Fluid.of("kubejs:liquid_sunshine", 5000))
              .requireItem(Item.of("minecraft:firework_rocket", 1))
              .requireEnergy(10000)
              .runCommandOnEnd("/weather clear")
              .runCommandOnEnd("/summon minecraft:firework_rocket")

  })
