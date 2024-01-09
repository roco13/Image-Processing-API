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
const logger_1 = __importDefault(require("./utilities/logger"));
const resizeImage_1 = __importDefault(require("./utilities/resizeImage"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
//create middleware
app.use('/api', logger_1.default, index_1.default);
// Without middleware
app.get('/api/images', logger_1.default, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let fileName = req.query.name;
    let width = Number(req.query.width);
    let height = Number(req.query.height);
    try {
        if (fileName === '' || width === 0 || height === 0) {
            res.send(`Error in the current url, need to provide image name, widht and height<br>
    For example http://localhost:3000/api/images<b>?name=fjord&width=200&height=200</b> `);
            return;
        }
        let outputFile = `${fileName}_${width}_${height}.jpg`;
        yield (0, resizeImage_1.default)(fileName, width, height);
        yield res.sendFile(outputFile, { root: 'images/thumb' });
    }
    catch (err) {
        res.send(`Error in the current url, need to provide image name, widht and height<br>
    For example http://localhost:3000/api/images<b>?name=fjord&width=200&height=200</b> `);
        console.log(err);
    }
}));
//create server
app.listen(port, () => {
    console.log(`server ready at http://localhost:${port}`);
});
exports.default = app;
