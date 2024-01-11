"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizeImage_1 = __importDefault(require("../../utilities/resizeImage"));
const images = express_1.default.Router();
//create primary endpoint with get request
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //res.send('images route');
    const fileName = req.query.name;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    try {
        if (fileName === '' || width === 0 || height === 0) {
            res.send(`Error in the current url, need to provide image name, widht and height<br>
    For example http://localhost:3000/api/images<b>?name=fjord&width=200&height=200</b> `);
            return;
        }
        const outputFile = `${fileName}_${width}_${height}.jpg`;
        yield (0, resizeImage_1.default)(fileName, width, height);
        yield res.sendFile(outputFile, { root: 'images/thumb' });
    }
    catch (err) {
        console.log(err);
        res.send(`Error in the current url, need to provide image name, widht and height<br>
    For example http://localhost:3000/api/images<b>?name=fjord&width=200&height=200</b> `);
    }
}));
exports.default = images;
