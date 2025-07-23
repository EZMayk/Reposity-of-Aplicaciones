"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCiudadanoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ciudadano_dto_1 = require("./create-ciudadano.dto");
class UpdateCiudadanoDto extends (0, mapped_types_1.PartialType)(create_ciudadano_dto_1.CreateCiudadanoDto) {
}
exports.UpdateCiudadanoDto = UpdateCiudadanoDto;
//# sourceMappingURL=update-ciudadano.dto.js.map