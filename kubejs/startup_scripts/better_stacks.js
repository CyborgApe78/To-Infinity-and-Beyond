onEvent('item.modification', (event) => {
    const increaseStackSize = [
        'rftoolsbase:infused_enderpearl',
        'rftoolsbase:infused_diamond',
        /^industrialforegoing:.*addon.*/,
        'minecraft:ender_pearl',
        'minecraft:egg',
        'minecraft:honey_bottle',
        'minecraft:snowball',
        'minecraft:armor_stand',
        'minecraft:bucket',
        'minecraft:oak_sign',
        'minecraft:spruce_sign',
        'minecraft:oak_sign',
        'minecraft:spruce_sign',
        'minecraft:birch_sign',
        'minecraft:acacia_sign',
        'minecraft:jungle_sign',
        'minecraft:dark_oak_sign',
        'minecraft:crimson_sign',
        'minecraft:warped_sign',
        'powah:charged_snowball',
        'mekanism:upgrade_speed',
        'mekanism:upgrade_energy',
        'mekanism:upgrade_filter',
        'mekanism:upgrade_muffling',
        'mekanism:upgrade_gas',
        'mekanism:upgrade_anchor',
        'thermal:explosive_grenade',
        'thermal:slime_grenade',
        'thermal:redstone_grenade',
        'thermal:glowstone_grenade',
        'thermal:ender_grenade',
        'thermal:earth_grenade',
        'thermal:fire_grenade',
        'thermal:ice_grenade',
        'thermal:lightning_grenade',
        'extendedcrafting:ultimate_singularity'
    ];

    event.modify(increaseStackSize, (item) => {
        item.maxStackSize = 64;
    });
});
