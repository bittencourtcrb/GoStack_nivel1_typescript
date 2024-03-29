"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: 'bittencourtcrb@gmail.com',
        password: '123456',
        techs: ['Node.js', 'ReactJS', 'React Native', {
                title: 'Javascript',
                experience: 75,
            }],
    });
    return response.json({ message: "Hello World, " + user.name });
}
exports.helloWorld = helloWorld;
