import Joi from "joi";
import BaseDto from "../../../common/dto/base.dto.js";

class RegisterDto extends BaseDto {
  static schema = Joi.object({
    name: Joi.string().trim().min(2).max(50).required(),
    email: Joi.string().email().trim().lowercase().required(),
    password: Joi.string().min(8).max(128).required().messages({
      "string.min": "Password must contain at least 8 characters",
    }),
    profilePic: Joi.string().uri().allow("").optional(),
  });
}

export default RegisterDto;
