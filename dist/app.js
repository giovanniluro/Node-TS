"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (request, response) => {
    const { name } = request.body;
    return response.json({
        message: `Hello ${name}`
    });
});
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
