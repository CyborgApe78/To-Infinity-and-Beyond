onEvent('jei.information', (event) => {

    const recipes = [
        {
            items: ['buildinggadgets:construction_paste'],
            text: ['Obtained by breaking a Dense Construction Block with a Pickaxe.']
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
            text: [
                "Nine Quintillion is big. Really big. You just won't believe how vastly hugely mind-bogglingly big it is."
            ]
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
            text: [
                "Unless you plan on sitting here for a few centuries, filling this tool isn't possible through conventional means. Some say the answer lies in Nucleosynthesis instead."
            ]
        }
    ];



    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.text);
        });
    });


});
