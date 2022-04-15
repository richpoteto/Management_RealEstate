import { propertyProperties } from "./schema.js";
import { responseError } from "../../../utils/schema/response.js";

export const updatePropertyOpts = (handler) => ({
  schema: {
    response: {
      201: {
        type: "object",
        properties: {
          status: {
            type: "number",
            default: 201,
          },
          message: {
            type: "string",
            default: "Success",
          },
          data: propertyProperties,
        },
      },
      400: responseError(),
      404: responseError({
        status: 404,
        message: "Error: Property not found!",
      }),
    },
  },
  handler: handler,
});
