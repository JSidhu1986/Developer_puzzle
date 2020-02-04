/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

const Glue = require('@hapi/glue');
const manifest = require('./manifest');

const startServer = async function () {
    try {
        const server = await Glue.compose(manifest);
        await server.start();
        console.log('hapi days!');
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
startServer();
  