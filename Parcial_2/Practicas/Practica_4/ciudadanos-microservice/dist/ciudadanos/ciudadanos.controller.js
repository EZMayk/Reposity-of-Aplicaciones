"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadanosController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const ciudadanos_service_1 = require("./ciudadanos.service");
const create_ciudadano_dto_1 = require("./dto/create-ciudadano.dto");
let CiudadanosController = class CiudadanosController {
    constructor(ciudadanosService) {
        this.ciudadanosService = ciudadanosService;
    }
    create(createCiudadanoDto) {
        return this.ciudadanosService.create(createCiudadanoDto);
    }
    findAll() {
        return this.ciudadanosService.findAll();
    }
    findOne(id) {
        return this.ciudadanosService.findOne(id);
    }
    update(payload) {
        return this.ciudadanosService.update(payload.id, payload.updateCiudadanoDto);
    }
    remove(id) {
        return this.ciudadanosService.remove(id);
    }
};
exports.CiudadanosController = CiudadanosController;
__decorate([
    (0, microservices_1.MessagePattern)('createCiudadano'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ciudadano_dto_1.CreateCiudadanoDto]),
    __metadata("design:returntype", void 0)
], CiudadanosController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllCiudadanos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CiudadanosController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneCiudadano'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CiudadanosController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateCiudadano'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CiudadanosController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeCiudadano'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CiudadanosController.prototype, "remove", null);
exports.CiudadanosController = CiudadanosController = __decorate([
    (0, common_1.Controller)('ciudadanos'),
    __metadata("design:paramtypes", [ciudadanos_service_1.CiudadanosService])
], CiudadanosController);
//# sourceMappingURL=ciudadanos.controller.js.map