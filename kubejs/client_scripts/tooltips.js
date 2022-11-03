onEvent('item.tooltip', tooltip => {

    tooltip.add('ae2:facade', 'Using the same recipe, you can make a facade out of almost any block')
      const recipes = [
        {
            items: ['powah:charged_snowball', 'thermal:lightning_charge'],
            text: [Text.of('Calls down a lightning bolt on impact.').gold()]
        },
          {
            items: [
                'thermal:enderium_glass',
                'thermal:lumium_glass',
                'thermal:signalum_glass',
                'thermal:obsidian_glass'
            ],
            text: [Text.of('Immune to the Wither').color('#4F0D75')]
        },
        {
            items: [
                'rftoolsbuilder:shield_block4',
                'rftoolsbuilder:shield_block3',
                'rftoolsbuilder:shield_block2',
                'rftoolsbuilder:shield_block1'
            ],
            text: [Text.of('Shield Projections are immune to the Wither').color('#4F0D75')]
        },
        {
            items: [
                'industrialforegoing:infinity_backpack',
                'industrialforegoing:infinity_saw',
                'industrialforegoing:infinity_drill',
                'industrialforegoing:infinity_hammer',
                'industrialforegoing:infinity_trident',
                'industrialforegoing:infinity_nuke',
                'industrialforegoing:infinity_launcher'
            ],
            text: [Text.of('Can charge in Nucleosynthesis').green()]
        },
        {
            items: [
                'ae2:memory_card',
                'beyond_earth:flag',
                'simplylight:illuminant_block_on',
                'simplylight:illuminant_block',
                /mekanismadditions:white/,
                `minecraft:white_bed`,
                `minecraft:white_wool`,
                `thermal:white_rockwool`,
                `minecraft:white_concrete_powder`,
                `minecraft:white_concrete`,
                `minecraft:white_carpet`,
                `minecraft:white_wool`,
                `minecraft:white_stained_glass`,
                `minecraft:white_stained_glass_pane`,
                'minecraft:white_banner',
                'minecraft:terracotta',
                'minecraft:candle',
                'minecraft:shulker_box',
                'minecraft:terracotta',

                 ae2cables.forEach(cable => {
                    `ae2:fluix_${cable}`
                    })
            ],
            text: [Text.of('Comes in all colors').white()]
        },
        {
            items: [
                'ae2:cable_anchor'
            ],
            text: [Text.of('4 around a block makes facades').gray()]
        },

        
        
        ];

    recipes.forEach((recipe) => {
        tooltip.add(recipe.items, recipe.text);
    });

})

