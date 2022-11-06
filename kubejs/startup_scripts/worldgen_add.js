onEvent('worldgen.add', (event) => {

    event.addLake((lake) => {
        lake.id = "kubejs:pyrotheum_lake" // BlockStatePredicate
        lake.chance = 100
        lake.biomes = "beyond_earth:venus_desert"
        lake.fluid = "kubejs:liquid_blazing_pyrotheum"
        lake.barrier = "minecraft:magma_block"
    })

});
