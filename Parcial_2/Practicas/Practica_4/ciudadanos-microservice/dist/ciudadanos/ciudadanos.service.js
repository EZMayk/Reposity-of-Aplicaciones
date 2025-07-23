"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadanosService = void 0;
const common_1 = require("@nestjs/common");
let CiudadanosService = class CiudadanosService {
    constructor() {
        this.ciudadanos = [];
        this.idCounter = 1;
    }
    create(createCiudadanoDto) {
        const ciudadano = Object.assign(Object.assign({ id: this.idCounter++ }, createCiudadanoDto), { activo: true });
        this.ciudadanos.push(ciudadano);
        return ciudadano;
    }
    findAll() {
        return this.ciudadanos;
    }
    findOne(id) {
        return this.ciudadanos.find(c => c.id === id);
    }
    update(id, updateCiudadanoDto) {
        const index = this.ciudadanos.findIndex(c => c.id === id);
        if (index >= 0) {
            this.ciudadanos[index] = Object.assign(Object.assign({}, this.ciudadanos[index]), updateCiudadanoDto);
            return this.ciudadanos[index];
        }
        return null;
    }
    remove(id) {
        const index = this.ciudadanos.findIndex(c => c.id === id);
        if (index >= 0) {
            const ciudadano = this.ciudadanos[index];
            this.ciudadanos.splice(index, 1);
            return ciudadano;
        }
        return null;
    }
};
exports.CiudadanosService = CiudadanosService;
exports.CiudadanosService = CiudadanosService = __decorate([
    (0, common_1.Injectable)()
], CiudadanosService);
//# sourceMappingURL=ciudadanos.service.js.map