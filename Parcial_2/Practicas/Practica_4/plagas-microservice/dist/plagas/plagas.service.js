"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlagasService = void 0;
const common_1 = require("@nestjs/common");
const plaga_entity_1 = require("./plaga.entity");
let PlagasService = class PlagasService {
    constructor() {
        this.plagas = [];
        this.idCounter = 1;
    }
    findAll() {
        return this.plagas;
    }
    findOne(id) {
        return this.plagas.find(plaga => plaga.id === id);
    }
    create(createPlagaDto) {
        const plaga = new plaga_entity_1.Plaga(Object.assign(Object.assign({ id: this.idCounter++ }, createPlagaDto), { createdAt: new Date(), updatedAt: new Date() }));
        this.plagas.push(plaga);
        return plaga;
    }
    update(id, updatePlagaDto) {
        const index = this.plagas.findIndex(plaga => plaga.id === id);
        if (index !== -1) {
            this.plagas[index] = Object.assign(Object.assign(Object.assign({}, this.plagas[index]), updatePlagaDto), { updatedAt: new Date() });
            return this.plagas[index];
        }
        return null;
    }
    remove(id) {
        const index = this.plagas.findIndex(plaga => plaga.id === id);
        if (index !== -1) {
            this.plagas.splice(index, 1);
            return true;
        }
        return false;
    }
};
exports.PlagasService = PlagasService;
exports.PlagasService = PlagasService = __decorate([
    (0, common_1.Injectable)()
], PlagasService);
//# sourceMappingURL=plagas.service.js.map