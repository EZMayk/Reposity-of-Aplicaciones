"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimaService = void 0;
const common_1 = require("@nestjs/common");
const clima_entity_1 = require("./clima.entity");
let ClimaService = class ClimaService {
    constructor() {
        this.registrosClima = [];
        this.idCounter = 1;
    }
    findAll() {
        return this.registrosClima;
    }
    findOne(id) {
        return this.registrosClima.find(clima => clima.id === id);
    }
    create(createClimaDto) {
        const clima = new clima_entity_1.Clima(Object.assign(Object.assign({ id: this.idCounter++ }, createClimaDto), { createdAt: new Date(), updatedAt: new Date() }));
        this.registrosClima.push(clima);
        return clima;
    }
    update(id, updateClimaDto) {
        const index = this.registrosClima.findIndex(clima => clima.id === id);
        if (index !== -1) {
            this.registrosClima[index] = Object.assign(Object.assign(Object.assign({}, this.registrosClima[index]), updateClimaDto), { updatedAt: new Date() });
            return this.registrosClima[index];
        }
        return null;
    }
    remove(id) {
        const index = this.registrosClima.findIndex(clima => clima.id === id);
        if (index !== -1) {
            this.registrosClima.splice(index, 1);
            return true;
        }
        return false;
    }
};
exports.ClimaService = ClimaService;
exports.ClimaService = ClimaService = __decorate([
    (0, common_1.Injectable)()
], ClimaService);
//# sourceMappingURL=clima.service.js.map