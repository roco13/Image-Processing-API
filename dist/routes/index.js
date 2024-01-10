"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import images from './api/images';
const routes = express_1.default.Router();
//create primary endpoint with get request
routes.get('/', (req, res) => {
    res.send('Main api route');
});
//routes.use('/images', images);
exports.default = routes;
