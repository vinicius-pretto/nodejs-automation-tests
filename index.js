const { port } = require('./config');
const app = require('./src/app');

async function bootstrap() {
    await app.listen(port);
    console.log(`Server is listening at port ${port}`);
}

bootstrap();
