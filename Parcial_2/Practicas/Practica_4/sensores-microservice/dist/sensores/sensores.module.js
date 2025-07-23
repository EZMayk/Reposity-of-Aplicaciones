"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensoresModule = void 0;
const common_1 = require("@nestjs/common");
const sensores_controller_1 = require("./sensores.controller");
const sensores_service_1 = require("./sensores.service");
let SensoresModule = class SensoresModule {
};
exports.SensoresModule = SensoresModule;
exports.SensoresModule = SensoresModule = __decorate([
    (0, common_1.Module)({
        controllers: [sensores_controller_1.SensoresController],
        providers: [sensores_service_1.SensoresService],
    })
], SensoresModule);
//# sourceMappingURL=sensores.module.js.map