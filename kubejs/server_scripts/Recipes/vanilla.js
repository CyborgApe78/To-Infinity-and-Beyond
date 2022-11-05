onEvent('recipes', e => {

  e.remove({ output: 'minecraft:sticky_piston'})
  e.shapeless('minecraft:sticky_piston', ['#forge:slimeballs', 'minecraft:piston'])
	e.recipes.thermal.bottler('minecraft:sticky_piston', [Fluid.of('industrialforegoing:pink_slime', 100), 'minecraft:piston']).energy(400);
  e.recipes.thermal.bottler('minecraft:sticky_piston', [Fluid.of('kubejs:liquid_slime', 100), 'minecraft:piston']).energy(400);


})
