
import App from './app';
import AppController from './services/api/app/app.controller';
import ProjectController from './services/api/project/project.controller';
const app = new App([
    new AppController(),
    new ProjectController(),
], [
]);

app.listen();
