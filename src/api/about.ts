import { request as __request } from "@/lib/request/core/request";
import { endpoints } from "./config";
import { OpenAPI } from "@/lib/request/core/OpenAPI";
import { About } from "@/payload-types";
export const aboutService = {
  getAbout: () => {
    return __request<About>(OpenAPI, {
      method: "GET",
      url: `${endpoints.about}`,
    });
  },
};
