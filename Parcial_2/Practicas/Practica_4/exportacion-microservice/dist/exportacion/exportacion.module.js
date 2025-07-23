"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportacionModule = void 0;
const common_1 = require("@nestjs/common");
const exportacion_controller_1 = require("./exportacion.controller");
const exportacion_service_1 = require("./exportacion.service");
let ExportacionModule = class ExportacionModule {
};
exports.ExportacionModule = ExportacionModule;
exports.ExportacionModule = ExportacionModule = __decorate([
    (0, common_1.Module)({
        controllers: [exportacion_controller_1.ExportacionController],
        providers: [exportacion_service_1.ExportacionService],
    })
], ExportacionModule);
//# sourceMappingURL=exportacion.module.js.map