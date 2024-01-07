"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import logger from '../../utilities/logger'
const images = express_1.default.Router();
//create primary endpoint with get request
// images.get('/images', logger, (req, res) => {
//   res.send('images route');
// });
images.get('/', (req, res) => {
    res.send('images route');
});
// req.query.name
// req.query.surname
exports.default = images;
