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
const logger_1 = __importDefault(require("../../utilities/logger"));
const resize = express_1.default.Router();
resize.get('/api/images', logger_1.default, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('api/images route');
    // let fileName = req.query.name as string;
    // let width = Number(req.query.width);
    // let height = Number(req.query.height);
    // try {
    //   if (fileName === '' || width === 0 || height === 0) {
    //     res.send(`Error in the current url, need to provide image name, widht and height<br>
    //   For example http://localhost:3000/api/images<b>?name=fjord&width=200&height=200</b> `);
    //     return;
    //   }
    //   let outputFile = `${fileName}_${width}_${height}.jpg`;
    //   await resizeImage(fileName, width, height);
    //   await res.sendFile(outputFile, { root: 'images/thumb' });
    // } catch (err) {
    //   console.log(err);
    //   res.send(`Error in the current url, need to provide image name, widht and height<br>
    //   For example http://localhost:3000/api/images<b>?name=fjord&width=200&height=200</b> `);
    // }
}));
exports.default = resize;
