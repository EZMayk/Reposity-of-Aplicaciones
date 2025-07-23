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
exports.CultivosService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let CultivosService = class CultivosService {
    constructor(client) {
        this.client = client;
    }
    findAll() {
        return this.client.send({ cmd: 'find_all_cultivos' }, {});
    }
    findOne(id) {
        return this.client.send({ cmd: 'find_one_cultivo' }, { id });
    }
    create(createCultivoDto) {
        return this.client.send({ cmd: 'create_cultivo' }, createCultivoDto);
    }
    update(id, updateCultivoDto) {
        return this.client.send({ cmd: 'update_cultivo' }, Object.assign({ id }, updateCultivoDto));
    }
    remove(id) {
        return this.client.send({ cmd: 'remove_cultivo' }, { id });
    }
};
exports.CultivosService = CultivosService;
exports.CultivosService = CultivosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CULTIVOS_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], CultivosService);
//# sourceMappingURL=cultivos.service.js.map