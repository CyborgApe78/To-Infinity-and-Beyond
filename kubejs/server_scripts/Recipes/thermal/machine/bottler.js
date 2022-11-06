onEvent('recipes', (event) => {
    const id_prefix = 'infinity:thermal/bottler/';
    const recipes = [
        {
            input: 'buildinggadgets:construction_block_powder',
            fluid: Fluid.of('minecraft:water', 1000),
            output: 'buildinggadgets:construction_block_dense',
            id: `${id_prefix}construction_block_dense`
        },
        {
            input: 'ae2:quartz_glass',
            fluid: Fluid.of('thermal:glowstone', 100),
            output: 'ae2:quartz_vibrant_glass',
            id: `${id_prefix}construction_block_dense`
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });

    colors.forEach(color => {    
      const recipes = [
        {  
            input: `mekanismadditions:${color}_plastic`,
            fluid: Fluid.of('kubejs:molten_blizz', 100),
            output: `mekanismadditions:${color}_slick_plastic`,
            id: `${id_prefix}${color}_slick_plastic`
        },
        {  
            input: `mekanismadditions:${color}_plastic`,
            fluid: Fluid.of('thermal:glowstone', 100),
            output: `mekanismadditions:${color}_plastic_glow`,
            id: `${id_prefix}${color}_plastic_glow`
        },
        {  
            input: `mekanismadditions:${color}_plastic`,
            fluid: Fluid.of('kubejs:molten_blitz', 100),
            output: `mekanismadditions:${color}_plastic_road`,
            id: `${id_prefix}${color}_plastic_road`
        },
        {  
            input: `mekanismadditions:${color}_plastic`,
            fluid: Fluid.of('kubejs:molten_glass', 100),
            output: `mekanismadditions:${color}_plastic_transparent`,
            id: `${id_prefix}${color}_plastic_transparent`
        },
        {  
            input: `ae2:${color}_paint_ball`,
            fluid: Fluid.of('thermal:glowstone', 100),
            output: `ae2:${color}_lumen_paint_ball`,
            id: `${id_prefix}${color}_lumen_paint_ball`
        },
       ];


       


        recipes.forEach((recipe) => {
            event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
        });
      });
});
