"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CultivosService = void 0;
const common_1 = require("@nestjs/common");
const cultivo_entity_1 = require("./cultivo.entity");
let CultivosService = class CultivosService {
    constructor() {
        this.cultivos = [];
        this.idCounter = 1;
    }
    findAll() {
        return this.cultivos;
    }
    findOne(id) {
        return this.cultivos.find(cultivo => cultivo.id === id);
    }
    create(createCultivoDto) {
        const cultivo = new cultivo_entity_1.Cultivo(Object.assign(Object.assign({ id: this.idCounter++ }, createCultivoDto), { createdAt: new Date(), updatedAt: new Date() }));
        this.cultivos.push(cultivo);
        return cultivo;
    }
    update(id, updateCultivoDto) {
        const index = this.cultivos.findIndex(cultivo => cultivo.id === id);
        if (index !== -1) {
            this.cultivos[index] = Object.assign(Object.assign(Object.assign({}, this.cultivos[index]), updateCultivoDto), { updatedAt: new Date() });
            return this.cultivos[index];
        }
        return null;
    }
    remove(id) {
        const index = this.cultivos.findIndex(cultivo => cultivo.id === id);
        if (index !== -1) {
            this.cultivos.splice(index, 1);
            return true;
        }
        return false;
    }
};
exports.CultivosService = CultivosService;
exports.CultivosService = CultivosService = __decorate([
    (0, common_1.Injectable)()
], CultivosService);
//# sourceMappingURL=cultivos.service.js.map