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
//import sharp from 'sharp';
const index_1 = __importDefault(require("./routes/index"));
const logger_1 = __importDefault(require("./utilities/logger"));
const sharp = require('sharp');
// async function getMetadata() {
//   const metadata = await sharp("./images/encenadaport.jpg").metadata();
//   console.log(metadata);
// }
// getMetadata()
const resizeImage2 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sharp('images/fjord.jpg')
            .resize(200, 200)
            .toFile(__dirname + '/thumb/fjordresized.jpg');
    }
    catch (e) {
        console.log(`Error occured: ${e}`);
    }
});
const resizeImage = () => __awaiter(void 0, void 0, void 0, function* () {
    const resize = yield sharp('images/fjord.jpg')
        .resize(350, 260)
        .toFile('images/thumb2/resize_fjord.jpg');
    console.log(resize);
});
//resizeImage2();
//resizeImage();
const app = (0, express_1.default)();
const port = 3000;
//create middleware
app.use('/api', logger_1.default, index_1.default);
//create server
app.listen(port, () => {
    console.log(`server ready at http://localhost:${port}`);
});
exports.default = app;
