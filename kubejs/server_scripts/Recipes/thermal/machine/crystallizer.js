onEvent('recipes', (event) => {
    const id_prefix = 'infinity:thermal/crystallizer/';
    const recipes = [
        {
          ingredients: [{
              fluid: "kubejs:liquid_blazing_pyrotheum",
              amount: 1000
            },
            {
              item: "kubejs:dust_blaze"
            }],
            result: [{
              item: "powah:crystal_blazing"
            }],
            id: `${id_prefix}crystal_blazing`
        },
        {
          ingredients: [{
              fluid: "kubejs:liquid_gelid_cryotheum",
              amount: 1000
            },
            {
              tag: "forge:gems/emerald"
            }],
            result: [{
              item: "kubejs:gem_gelid_crystal"
            }],
            id: `${id_prefix}gem_gelid_crystal`
        },
        {
          ingredients: [{
              fluid: "thermal:ender",
              amount: 1000
            },
            {
              tag: "forge:gems/emerald"
            }],
            result: [{
              item: "kubejs:ender_crystal"
            }],
            id: `${id_prefix}ender_crystal`
        },
        {
          ingredients: [{
            fluid: "thermal:redstone",
            amount: 250
            },
            {
              tag: "forge:string"
            }],
            result: [{
              item: "kubejs:string_fluxed"
            }],
            id: `${id_prefix}string_fluxed`
        },
        {
            ingredients: [{
              fluid: "kubejs:liquid_gelid_cryotheum",
              amount: 1000
            },
            {
              tag: "forge:dusts/enderium"
            }],
            result: [{
              item: "kubejs:dust_gelid_enderium"
            }],
            id: `${id_prefix}dust_gelid_enderium`
        },
        {
            ingredients: [{
              fluid: "kubejs:liquid_gelid_cryotheum",
              amount: 1000
            },
            {
              item: "thermal:enderium_dust"
            }],
            result: [{
              item: "kubejs:dust_gelid_enderium"
            }],
            id: `${id_prefix}dust_gelid_enderium`
        },
        {
            ingredients: [{
              fluid: "thermal:redstone",
              amount: 250
            },
            {
              item: "thermal:blitz_powder"
            }],
            result: [{
              item: "kubejs:dust_aerotheum"
            }],
            id: `${id_prefix}dust_aerotheum`
        },
        {
            ingredients: [{
              fluid: "thermal:redstone",
              amount: 250
            },
            {
              item: "thermal:basalz_powder"
            }],
            result: [{
              item: "kubejs:dust_petrotheum"
            }],
            id: `${id_prefix}dust_petrotheum`
        },
        {
            ingredients: [{
              fluid: "thermal:redstone",
              amount: 200
            },
            {
              item: "kubejs:phytogro_rich"
            }],
            result: [{
              item: "kubejs:phytogro_flux"
            }],
            id: `${id_prefix}phytogro_flux`
        },
        {
            ingredients: [{
              fluid: "thermal:sap",
              amount: 200
            },
            {
              item: "thermal:phytogro"
            }],
            result: [{
              item: "kubejs:phytogro_rich"
            }],
            id: `${id_prefix}phytogro_rich`
        },
        {
            ingredients: [{
              fluid: "kubejs:liquid_seed_oil",
              amount: 250
            },
            {
              item: "mekanism:bio_fuel"
            }],
            result: [{
              item: "kubejs:dust_biofuel_rich"
            }],
            id: `${id_prefix}dust_biofuel_rich`
        },
        {
            ingredients: [{
              fluid: "thermal:latex",
              amount: 900
            },
            {
              tag: "forge:dusts/sulfur"
            }],
            result: [{
              item: "industrialforegoing:dryrubber"
            }],
            id: `${id_prefix}dryrubber`
        }
    ];

  
  recipes.forEach((recipe) => {
    recipe.type = 'thermal:crystallizer';
    event.custom(recipe).id(recipe.id);
    });
});
