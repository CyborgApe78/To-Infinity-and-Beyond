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
        'ae2:quartz_vibrant_glass'
    ];

    var idRemovals = [
        'redstone_arsenal:materials/flux_gem',
        'beyond_earth:flag_white_dye'
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
        e.remove({ output: `simplylight:illuminant_${color}_block`});
        e.remove({ output: `simplylight:illuminant_${color}_block_on`});
        e.remove({ output: `ae2:${color}_paint_ball`});
        e.remove({ output: `ae2:${color}_lumen_paint_ball`});
        e.remove({ output: `ae2:memory_card_${color}`});
        e.remove({ output: `beyond_earth:flag_${color}` , type: 'minecraft:crafting_shaped' });
    });
  

    
})
