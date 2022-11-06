onEvent('recipes', e => {


    var data = {
        recipes: [
            {
                input: { ingredient: { item: `minecraft:ender_pearl` } },
                output: { amount: 10, infuse_type: 'kubejs:ender' }
            },
            {
                input: { ingredient: { item: `kubejs:enriched_ender` } },
                output: { amount: 80, infuse_type: 'kubejs:ender' }
            },
            {
                input: { ingredient: { tag: `ae2:all_quartz` } },
                output: { amount: 10, infuse_type: 'kubejs:certus' }
            },
            {
                input: { ingredient: { item: 'ae2:quartz_block' } },
                output: { amount: 40, infuse_type: 'kubejs:certus' }
            },
            {
                input: { ingredient: { item: 'minecraft:quartz_block' } },
                output: { amount: 40, infuse_type: 'kubejs:certus' }
            },
            {
                input: { ingredient: { item: 'kubejs:enriched_certus' } },
                output: { amount: 80, infuse_type: 'kubejs:certus' }
            },
            {
                input: { ingredient: { item: `minecraft:blaze_powder` } },
                output: { amount: 10, infuse_type: 'kubejs:blazing' }
            },
            {
                input: { ingredient: { item: 'minecraft:blaze_rod' } },
                output: { amount: 40, infuse_type: 'kubejs:blazing' }
            },
            {
                input: { ingredient: { item: 'kubejs:enriched_blaze' } },
                output: { amount: 80, infuse_type: 'kubejs:blazing' }
            },
            {
                input: { ingredient: { item: 'ae2:silicon' } },
                output: { amount: 10, infuse_type: 'kubejs:silicon' }
            },
            {
                input: { ingredient: { item: 'kubejs:enriched_silicon' } },
                output: { amount: 80, infuse_type: 'kubejs:silicon' }
            },
            {
                input: { ingredient: { item: 'minecraft:glowstone_dust' } },
                output: { amount: 10, infuse_type: 'kubejs:glowing' }
            },
            {
                input: { ingredient: { item: 'kubejs:enriched_glowstone' } },
                output: { amount: 80, infuse_type: 'kubejs:glowing' }
            },
            {
                input: { ingredient: { item: 'thermal:silver_ingot' } },
                output: { amount: 10, infuse_type: 'kubejs:silver' }
            },
            {
                input: { ingredient: { item: 'rftoolsbase:dimensionalshard' } },
                output: { amount: 10, infuse_type: 'kubejs:dimensional' }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        e.custom({
            type: 'mekanism:infusion_conversion',
            input: recipe.input,
            output: recipe.output
        });
    });
});