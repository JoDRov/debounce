"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saludar = void 0;
const saludar = (saludo) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(saludo);
        }, 500);
    });
};
exports.saludar = saludar;
//# sourceMappingURL=index.js.map