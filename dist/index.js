"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./utilities/logger"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
//create middleware
app.use('/api', logger_1.default, index_1.default);
//create server
app.listen(port, () => {
    console.log(`server ready at http://localhost:${port}`);
});
exports.default = app;
