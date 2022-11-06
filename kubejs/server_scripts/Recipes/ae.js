onEvent('recipes', e => {

    
    //villager soul? desh for controller

    modifyShaped(e, 'aeinfinitybooster:infinity_card', 1, ['EBE', 'BUB', 'NNN'], {
        U: '#forge:ingots/enderium',
        B: 'ae2:wireless_booster',
        E: '#forge:plates/enderium',
        N: 'minecraft:netherite_ingot'
    })

    e.recipes.mekanismCrushing('thermal:quartz_dust', 'minecraft:quartz')
    e.smelting('ae2:silicon', '#forge:dusts/quartz').xp(0.35)
    e.blasting('ae2:silicon', '#forge:dusts/quartz').xp(0.35)
    e.remove({id:'mekanism:processing/quartz/to_dust'})
})
