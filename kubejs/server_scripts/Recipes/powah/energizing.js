onEvent('recipes', (event) => {
    const id_prefix = 'infinity:powah/energizing/';
    const recipes = [
        {
            ingredients: [
                { item: 'ae2:printed_engineering_processor' },
                { item: 'ae2:printed_silicon' },
                { item: 'minecraft:redstone' }
            ],
            energy: 25000,
            result: {
                item: 'ae2:engineering_processor',
                count: 1
            },
            id: `${id_prefix}engineering_processor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
