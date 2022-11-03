onEvent('recipes', e => {

  modifyShaped(e,  'simplyjetpacks:armorplating_te5_enderium', 2, [' A ', 'ABA', ' A '], {
    A: 'kubejs:plate_gelid_enderium',
    B: 'kubejs:gem_gelid_crystal',

  })

	e.recipes.thermal.bottler('simplyjetpacks:unit_glowstone', ['simplyjetpacks:unit_glowstone_empty', Fluid.of('thermal:glowstone', 1000)]).energy(6400);
	e.recipes.thermal.bottler('simplyjetpacks:unit_cryotheum', ['simplyjetpacks:unit_cryotheum_empty', Fluid.of('kubejs:liquid_gelid_cryotheum', 1000)]).energy(6400);

})
