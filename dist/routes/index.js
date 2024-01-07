"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_1 = __importDefault(require("./api/images"));
const routes = express_1.default.Router();
//create primary endpoint wit get request
routes.get('/', (req, res) => {
    res.send('Main api route');
});
routes.use('/images', images_1.default);
images_1.default.use('/image/:name', (req, res) => {
    console.log(req.query.name);
});
exports.default = routes;