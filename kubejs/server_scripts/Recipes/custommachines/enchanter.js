
onEvent('recipes', e => {

  function enchanter(lvl, xp, ingredient, amount, rf, enchantOut){
        e.recipes.custommachinery.custom_machine("custommachinery:arcane_ensorcellator", 80)
            .requireFluid(Fluid.of("industrialforegoing:essence", xp * 1000))
            .requireItem(Item.of("minecraft:book", 1))
            .requireItem(Item.of("minecraft:lapis_lazuli", lvl * 3))
            .requireItem(Item.of(ingredient, amount))
            .requireEnergy(rf * lvl)
            .produceItem(Item.of('minecraft:enchanted_book').enchant(enchantOut, lvl), "output1")
    }

    enchanter(1, 6, 'minecraft:iron_ingot', 12, 4000, 'minecraft:protection')

    enchanter(1, 6, 'minecraft:blaze_powder', 12, 4000, 'minecraft:fire_protection')

    enchanter(1, 8, 'minecraft:feather', 1, 5000, 'minecraft:feather_falling')

    enchanter(1, 6, 'minecraft:gunpowder', 12, 4000, 'minecraft:blast_protection')

    enchanter(1, 6, 'minecraft:shield', 1, 4000, 'minecraft:projectile_protection')

    enchanter(1, 8, 'minecraft:glass_bottle', 1, 5000, 'minecraft:respiration')

    enchanter(1, 8, 'minecraft:lily_pad', 1, 5000, 'minecraft:aqua_affinity')

    enchanter(1, 8, 'minecraft:rose_bush', 1, 5000, 'minecraft:thorns')

    enchanter(1, 8, 'minecraft:prismarine_shard', 1, 5000, 'minecraft:depth_strider')

    enchanter(1, 8, 'minecraft:ice', 1, 5000, 'minecraft:frost_walker')

    enchanter(1, 8, 'minecraft:quartz', 1, 5000, 'minecraft:sharpness')

    enchanter(1, 8, 'minecraft:rotten_flesh', 1, 5000, 'minecraft:smite')

    enchanter(1, 8, 'minecraft:spider_eye', 1, 5000, 'minecraft:bane_of_arthropods')

    enchanter(1, 8, 'minecraft:piston', 1, 5000, 'minecraft:knockback')

    enchanter(1, 8, 'minecraft:blaze_rod', 1, 5000, 'minecraft:fire_aspect')

    enchanter(1, 8, 'minecraft:gold_ingot', 1, 5000, 'minecraft:looting')

    enchanter(1, 8, 'minecraft:sugar_cane', 1, 5000, 'minecraft:sweeping')

    enchanter(1, 8, 'minecraft:redstone', 1, 5000, 'minecraft:efficiency')

    enchanter(1, 8, 'minecraft:slime_ball', 1, 5000, 'minecraft:silk_touch')

    enchanter(1, 8, 'minecraft:obsidian', 1, 5000, 'minecraft:unbreaking')

    enchanter(1, 8, 'minecraft:emerald', 1, 5000, 'minecraft:fortune')

    enchanter(1, 8, 'minecraft:flint', 1, 5000, 'minecraft:power')

    enchanter(1, 8, 'minecraft:string', 1, 5000, 'minecraft:punch')

    enchanter(1, 8, 'minecraft:netherrack', 1, 5000, 'minecraft:flame')

    enchanter(1, 8, 'minecraft:ender_eye', 1, 5000, 'minecraft:infinity')

    enchanter(1, 8, 'minecraft:fishing_rod', 1, 5000, 'minecraft:luck_of_the_sea')

    enchanter(1, 8, 'minecraft:carrot', 1, 5000, 'minecraft:lure')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'minecraft:mending')

    enchanter(1, 8, 'minecraft:chest', 1, 5000, 'cofh_core:holding')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:magic_protection')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:displacement')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:air_affinity')

    enchanter(1, 8, 'minecraft:experience_bottle', 1, 5000, 'ensorcellation:exp_boost')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:reach')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:vitality')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:damage_illager')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:frost_aspect')

    enchanter(1, 8, 'minecraft:nether_wart', 1, 5000, 'ensorcellation:leech')

    enchanter(1, 8, 'minecraft:wither_skeleton_skull', 1, 5000, 'ensorcellation:vorpal')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:excavating')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:hunter')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:quick_draw')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:trueshot')

    enchanter(1, 8, 'minecraft:arrow', 1, 5000, 'ensorcellation:volley')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:angler')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:bulwark')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'ensorcellation:phalanx')

    enchanter(1, 8, 'minecraft:soul_sand', 1, 5000, 'ensorcellation:soulbound')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'simplyjetpacks:fuel_efficiency')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'travel_anchors:teleportation')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'travel_anchors:range')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'beyond_earth_giselle_addon:space_breathing')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'beyond_earth_giselle_addon:gravity_normalizing')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'beyond_earth_giselle_addon:space_fire_proof')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000, 'beyond_earth_giselle_addon:venus_acid_proof')

    enchanter(1, 8, 'minecraft:nether_star', 1, 5000,'minecraft:soul_speed')

  })
