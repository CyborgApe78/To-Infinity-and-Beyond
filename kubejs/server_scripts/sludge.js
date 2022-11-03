onEvent('item.tags', (event) => {

    event.get('industrialforegoing:sludge')
    .add('thermal:sulfur_dust')
    .add('thermal:sawdust')
    .add('mekanism:salt')
    .add('mekanism:dust_charcoal');

});
