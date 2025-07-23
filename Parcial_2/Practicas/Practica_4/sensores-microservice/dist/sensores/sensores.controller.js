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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensoresController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const sensores_service_1 = require("./sensores.service");
const create_sensor_dto_1 = require("./dto/create-sensor.dto");
const sensor_entity_1 = require("./sensor.entity");
let SensoresController = class SensoresController {
    constructor(sensoresService) {
        this.sensoresService = sensoresService;
    }
    findAll() {
        return this.sensoresService.findAll();
    }
    findOne(data) {
        return this.sensoresService.findOne(data.id);
    }
    create(createSensorDto) {
        return this.sensoresService.create(createSensorDto);
    }
    update(data) {
        const { id } = data, updateSensorDto = __rest(data, ["id"]);
        return this.sensoresService.update(id, updateSensorDto);
    }
    remove(data) {
        return this.sensoresService.remove(data.id);
    }
};
exports.SensoresController = SensoresController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'find_all_sensores' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], SensoresController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'find_one_sensor' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", sensor_entity_1.Sensor)
], SensoresController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_sensor' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sensor_dto_1.CreateSensorDto]),
    __metadata("design:returntype", sensor_entity_1.Sensor)
], SensoresController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_sensor' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", sensor_entity_1.Sensor)
], SensoresController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'remove_sensor' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Boolean)
], SensoresController.prototype, "remove", null);
exports.SensoresController = SensoresController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [sensores_service_1.SensoresService])
], SensoresController);
//# sourceMappingURL=sensores.controller.js.map