//priority: 900
onEvent('recipes', e => {

const customIngots = [
    {
        nugget: 'kubejs:nugget_stellar_alloy',
        ingot: 'kubejs:ingot_stellar_alloy',
        block: 'kubejs:block_stellar_alloy'
    },
    {
        nugget: 'kubejs:nugget_dark_steel',
        ingot: 'kubejs:ingot_dark_steel',
        block: 'kubejs:block_dark_steel'
    },
    {
        nugget: 'kubejs:nugget_end_steel',
        ingot: 'kubejs:ingot_end_steel',
        block: 'kubejs:block_end_steel'
    },
    {
        nugget: 'kubejs:nugget_melodic_alloy',
        ingot: 'kubejs:ingot_melodic_alloy',
        block: 'kubejs:block_melodic_alloy'
    },
    {
        nugget: 'kubejs:nugget_crystalline_pink_slime',
        ingot: 'kubejs:ingot_crystalline_pink_slime',
        block: 'kubejs:block_crystalline_pink_slime'
    },
    {
        nugget: 'kubejs:nugget_vibrant_alloy',
        ingot: 'kubejs:ingot_vibrant_alloy',
        block: 'kubejs:block_vibrant_alloy'
    },
    {
        nugget: 'kubejs:nugget_energetic_alloy',
        ingot: 'kubejs:ingot_energetic_alloy',
        block: 'kubejs:block_energetic_alloy'
    },
    {
        nugget: 'kubejs:nugget_crude_steel',
        ingot: 'kubejs:ingot_crude_steel',
        block: 'kubejs:block_crude_steel'
    },
    {
        nugget: 'kubejs:nugget_conductive_iron',
        ingot: 'kubejs:ingot_conductive_iron',
        block: 'kubejs:block_conductive_iron'
    },
    {
        nugget: 'kubejs:nugget_construction_alloy',
        ingot: 'kubejs:ingot_construction_alloy',
        block: 'kubejs:block_construction_alloy'
    },
    {
        nugget: 'kubejs:nugget_crude_steel',
        ingot: 'kubejs:ingot_crude_steel',
        block: 'kubejs:block_crude_steel'
    },
    {
        nugget: 'kubejs:nugget_crystalline_alloy',
        ingot: 'kubejs:ingot_crystalline_alloy',
        block: 'kubejs:block_crystalline_alloy'
    },
    {
        nugget: 'kubejs:nugget_electrical_steel',
        ingot: 'kubejs:ingot_electrical_steel',
        block: 'kubejs:block_electrical_steel'
    },
    {
        nugget: 'kubejs:nugget_pulsating_iron',
        ingot: 'kubejs:ingot_pulsating_iron',
        block: 'kubejs:block_pulsating_iron'
    },
    {
        nugget: 'kubejs:nugget_soularium',
        ingot: 'kubejs:ingot_soularium',
        block: 'kubejs:block_soularium'
    },
    {
        nugget: 'kubejs:nugget_energetic_silver',
        ingot: 'kubejs:ingot_energetic_silver',
        block: 'kubejs:block_energetic_silver'
    },
    {
        nugget: 'kubejs:nugget_vivid_alloy',
        ingot: 'kubejs:ingot_vivid_alloy',
        block: 'kubejs:block_vivid_alloy'
    },
    {
        nugget: 'kubejs:nugget_gelid_enderium',
        ingot: 'kubejs:ingot_gelid_enderium',
        block: 'kubejs:block_gelid_enderium'
    }
];

onEvent('recipes', (event) => {
    customIngots.forEach((recipe) => {
        shapeless_ingot_crafting(event, recipe);
    });
});


function shapeless_ingot_crafting(event, recipe) {
    //nugget to ingot & ingot to nugget
    var output_nug = Item.of(recipe.nugget, 9),
        inputs_ing = [recipe.ingot];

    var output_ing_from_nug = Item.of(recipe.ingot),
        inputs_nug = [Item.of(recipe.nugget, 9)];

    //ingot to block & block to ingot
    var output_ing = Item.of(recipe.ingot, 9),
        inputs_block = [recipe.block];

    var output_block_from_ingot = Item.of(recipe.block),
        inputs_ingot = [Item.of(recipe.ingot, 9)];

    event.shapeless(output_nug, inputs_ing);
    event.shapeless(output_ing_from_nug, inputs_nug);

    event.shapeless(output_ing, inputs_block);
    event.shapeless(output_block_from_ingot, inputs_ingot);

}


})
