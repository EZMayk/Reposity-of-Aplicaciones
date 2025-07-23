"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensoresService = void 0;
const common_1 = require("@nestjs/common");
const sensor_entity_1 = require("./sensor.entity");
let SensoresService = class SensoresService {
    constructor() {
        this.sensores = [];
        this.idCounter = 1;
    }
    findAll() {
        return this.sensores;
    }
    findOne(id) {
        return this.sensores.find(sensor => sensor.id === id);
    }
    create(createSensorDto) {
        const sensor = new sensor_entity_1.Sensor(Object.assign(Object.assign({ id: this.idCounter++ }, createSensorDto), { createdAt: new Date(), updatedAt: new Date() }));
        this.sensores.push(sensor);
        return sensor;
    }
    update(id, updateSensorDto) {
        const index = this.sensores.findIndex(sensor => sensor.id === id);
        if (index !== -1) {
            this.sensores[index] = Object.assign(Object.assign(Object.assign({}, this.sensores[index]), updateSensorDto), { updatedAt: new Date() });
            return this.sensores[index];
        }
        return null;
    }
    remove(id) {
        const index = this.sensores.findIndex(sensor => sensor.id === id);
        if (index !== -1) {
            this.sensores.splice(index, 1);
            return true;
        }
        return false;
    }
};
exports.SensoresService = SensoresService;
exports.SensoresService = SensoresService = __decorate([
    (0, common_1.Injectable)()
], SensoresService);
//# sourceMappingURL=sensores.service.js.map