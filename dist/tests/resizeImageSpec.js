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
const resizeImage_1 = __importDefault(require("../utilities/resizeImage"));
const path_1 = __importDefault(require("path"));
describe('test if Sharp resize function works', () => {
    it('returns a valid response with the rigth image', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, resizeImage_1.default)('palmtunnel', 300, 300);
        expect(response).toEqual(path_1.default.resolve(__dirname, '..', '..', 'images/thumb', 'palmtunnel_300_300.jpg'));
    }));
    //   it('returns an error when heigh is 0', async () => {
    //     const response = await resizeImage('palmtunnel', 300, 0);
    //     expect(response).toEqual(
    //       'Error: Expected positive integer for height but received 0 of type number'
    //     );
    //   });
});
