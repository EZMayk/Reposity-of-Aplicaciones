"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportacionService = void 0;
const common_1 = require("@nestjs/common");
const exportacion_entity_1 = require("./exportacion.entity");
let ExportacionService = class ExportacionService {
    constructor() {
        this.exportaciones = [];
        this.idCounter = 1;
    }
    findAll() {
        return this.exportaciones;
    }
    findOne(id) {
        return this.exportaciones.find(exportacion => exportacion.id === id);
    }
    create(createExportacionDto) {
        const exportacion = new exportacion_entity_1.Exportacion(Object.assign(Object.assign({ id: this.idCounter++ }, createExportacionDto), { createdAt: new Date(), updatedAt: new Date() }));
        this.exportaciones.push(exportacion);
        return exportacion;
    }
    update(id, updateExportacionDto) {
        const index = this.exportaciones.findIndex(exportacion => exportacion.id === id);
        if (index !== -1) {
            this.exportaciones[index] = Object.assign(Object.assign(Object.assign({}, this.exportaciones[index]), updateExportacionDto), { updatedAt: new Date() });
            return this.exportaciones[index];
        }
        return null;
    }
    remove(id) {
        const index = this.exportaciones.findIndex(exportacion => exportacion.id === id);
        if (index !== -1) {
            this.exportaciones.splice(index, 1);
            return true;
        }
        return false;
    }
};
exports.ExportacionService = ExportacionService;
exports.ExportacionService = ExportacionService = __decorate([
    (0, common_1.Injectable)()
], ExportacionService);
//# sourceMappingURL=exportacion.service.js.map