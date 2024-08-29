const { createRxDatabase, addRxPlugin } = require('nxdb');
const { NxDBQueryBuilderPlugin } = require('nxdb/plugins/query-builder');
const { NxDBDevModePlugin } = require('nxdb/plugins/dev-mode');

addRxPlugin(NxDBQueryBuilderPlugin);
addRxPlugin(NxDBDevModePlugin);

const heroSchema = {
    title: 'hero schema',
    description: 'describes a simple hero',
    version: 0,
    primaryKey: 'name',
    type: 'object',
    properties: {
        name: {
            type: 'string',
            maxLength: 100
        },
        color: {
            type: 'string'
        }
    },
    required: ['name', 'color']
};

async function getDatabase(name, storage) {
    const db = await createRxDatabase({
        name,
        storage
    });

    console.log('creating hero-collection..');
    await db.addCollections({
        heroes: {
            schema: heroSchema
        }
    });

    return db;
}


module.exports = {
    getDatabase
};
