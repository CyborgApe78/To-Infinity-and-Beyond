//priority: 1000

// Used to populate the buildWoodVariants constant - Add variants here to enable compat with various cutting mechanics.
// Be aware that you may need to specify exceptions in the loop below for this to work properly.
var woodVariantsToConstruct = [
    'minecraft:acacia',
    'minecraft:birch',
    'minecraft:dark_oak',
    'minecraft:jungle',
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:warped',
    'minecraft:crimson',
    
];

var buildWoodVariants = [];

woodVariantsToConstruct.forEach((variant) => {
    var splitVariant = variant.split(':');
    var modId = splitVariant[0];
    var logType = splitVariant[1];
    var logSuffix, woodSuffix, logBlockStripped, woodBlockStripped, logBlock, woodBlock, plankBlock, slabBlock;

    //suffix exceptions
    switch (logType) {
        case 'bulbis':
            logSuffix = '_stem';
            woodSuffix = '_wood';
            break;
        case 'sythian':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'warped':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'crimson':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'embur':
            logSuffix = '_pedu';
            woodSuffix = '_hyphae';
            break;
        case 'fungal_imparius':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        default:
            logSuffix = '_log';
            woodSuffix = '_wood';
    }

    logBlock = modId + ':' + logType + logSuffix;
    woodBlock = modId + ':' + logType + woodSuffix;
    logBlockStripped = modId + ':stripped_' + logType + logSuffix;
    woodBlockStripped = modId + ':stripped_' + logType + woodSuffix;
    plankBlock = modId + ':' + logType + '_planks';
    slabBlock = modId + ':' + logType + '_slab';

    // Exceptions
    if (modId == 'betterendforge') {
        logSuffix = '_log';
        woodSuffix = '_bark';

        logBlock = modId + ':' + logType + logSuffix;
        woodBlock = modId + ':' + logType + woodSuffix;
        logBlockStripped = modId + ':' + logType + '_stripped' + logSuffix;
        woodBlockStripped = modId + ':' + logType + '_stripped' + woodSuffix;
        plankBlock = modId + ':' + logType + '_planks';
    }

    if (modId == 'tconstruct') {
        slabBlock = modId + ':' + logType + '_planks_slab';
    }

    switch (logType) {
        case 'palo_verde':
            plankBlock = 'minecraft:birch_planks';
            break;
        case 'withering_oak':
            logBlockStripped = 'minecraft:stripped_oak_log';
            woodBlockStripped = 'minecraft:stripped_oak_wood';
            plankBlock = 'minecraft:oak_planks';
            break;
        
        case 'driftwood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'grimwood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'rosewood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        
        default:
    }

    var woodVariant = {
        modId: modId,
        logType: logType,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock,
        slabBlock: slabBlock
    };

    buildWoodVariants.push(woodVariant);
});
