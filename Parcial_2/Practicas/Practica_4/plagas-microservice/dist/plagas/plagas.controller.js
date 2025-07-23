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
exports.PlagasController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const plagas_service_1 = require("./plagas.service");
const create_plaga_dto_1 = require("./dto/create-plaga.dto");
let PlagasController = class PlagasController {
    constructor(plagasService) {
        this.plagasService = plagasService;
    }
    findAll() {
        return this.plagasService.findAll();
    }
    findOne(data) {
        return this.plagasService.findOne(data.id);
    }
    create(createPlagaDto) {
        return this.plagasService.create(createPlagaDto);
    }
    update(data) {
        const { id } = data, updatePlagaDto = __rest(data, ["id"]);
        return this.plagasService.update(id, updatePlagaDto);
    }
    remove(data) {
        return this.plagasService.remove(data.id);
    }
};
exports.PlagasController = PlagasController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'find_all_plagas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlagasController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'find_one_plaga' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PlagasController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_plaga' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plaga_dto_1.CreatePlagaDto]),
    __metadata("design:returntype", void 0)
], PlagasController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_plaga' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PlagasController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'remove_plaga' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PlagasController.prototype, "remove", null);
exports.PlagasController = PlagasController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [plagas_service_1.PlagasService])
], PlagasController);
//# sourceMappingURL=plagas.controller.js.map