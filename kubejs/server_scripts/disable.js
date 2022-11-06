// priority: 1000


onEvent('recipes', e => {
    global.recipe_disable.forEach(item => {
        e.remove({output: item})
    })

   
    var outputRemovals = [
        'redstone_arsenal:obsidian_rod',
        'rftoolsbase:infused_diamond',
        'rftoolsbase:infused_enderpearl',
        'ae2:quartz_glass',
        'ae2:quartz_vibrant_glass',
        'glassential:glass_redstone',
        'glassential:glass_light',
    ];

    var idRemovals = [
        'redstone_arsenal:materials/flux_gem',
        'beyond_earth:flag_white_dye',
        /alltheores:\w+hammer_crushing/,
        /simplylight:illuminant_block\w+dyed/,
    ];

    outputRemovals.forEach((removal) => {
        e.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        e.remove({ id: removal });
    });

    ae2cables.forEach(cable => {
        colors.forEach(color => {
            e.remove({ output: `ae2:${color}_${cable}` });
        });
    });

    colors.forEach(color => {
        var outputRemovals = [
            `simplylight:illuminant_${color}_block`,
            `simplylight:illuminant_${color}_block_on`,
            `ae2:${color}_paint_ball`,
            `ae2:${color}_lumen_paint_ball`,
            `ae2:memory_card_${color}`,
            
        ];
   
        outputRemovals.forEach((removal) => {
            e.remove({ output: removal });
        });

        var handCrafteRemoval = [
            `mekanismadditions:${color}_plastic`,
            `mekanismadditions:${color}_plastic_glow`,
            `mekanismadditions:${color}_slick_plastic`,
            `mekanismadditions:${color}_reinforced_plastic`,
            `mekanismadditions:${color}_plastic_road`,
            `mekanismadditions:${color}_plastic_transparent`,
            `beyond_earth:flag_${color}`,
        ];

         handCrafteRemoval.forEach((removal) => {
            e.remove({ output: removal, type: 'minecraft:crafting_shaped' })
        });

         var idRemoval = [
         `mekanismadditions:plastic/slick/enriching/${color}`,
         `mekanismadditions:plastic/glow/${color}`,
         `mekanismadditions:plastic/stairs/recolor/${color}`,
         `mekanismadditions:plastic/slab/recolor/${color}`,
         `mekanismadditions:plastic/fence/recolor/${color}`,
         `mekanismadditions:plastic/fence_gate/recolor/${color}`,
         `mekanismadditions:plastic/stairs/glow/recolor/${color}`,
         `mekanismadditions:plastic/slab/glow/recolor/${color}`,
         `mekanismadditions:plastic/stairs/transparent/recolor/${color}`,
         `mekanismadditions:plastic/slab/transparent/recolor/${color}`,
        ];

         idRemoval.forEach((removal) => {
            e.remove({ id: removal })
        });

    });
  

})
