//priority: 1000

const treeRegistry = [
    {
        type: 'tree',
        trees: [
            {
                sapling: 'minecraft:acacia_sapling',
                trunk: 'minecraft:acacia_log',
                leaf: 'minecraft:acacia_leaves',
                fruit: 'alexsmobs:acacia_blossom',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'minecraft:birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'minecraft:birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:dark_oak_sapling',
                trunk: 'minecraft:dark_oak_log',
                leaf: 'minecraft:dark_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:jungle_sapling',
                trunk: 'minecraft:jungle_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'alexsmobs:banana',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'minecraft:spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            }
        ]
    },
    {
        type: 'tree_shroom',
        trees: [
            {
                sapling: 'minecraft:brown_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:brown_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:crimson_fungus',
                trunk: 'minecraft:crimson_stem',
                leaf: 'minecraft:nether_wart_block',
                extraDecoration: 'minecraft:shroomlight',
                substrate: 'crimson_nylium'
            },
            {
                sapling: 'minecraft:red_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:red_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:warped_fungus',
                trunk: 'minecraft:warped_stem',
                leaf: 'minecraft:warped_wart_block',
                extraDecoration: 'minecraft:shroomlight',
                substrate: 'warped_nylium'
            }
        ]
    }
];
