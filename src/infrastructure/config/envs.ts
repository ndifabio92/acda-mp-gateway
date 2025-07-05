import "dotenv/config";
import { get } from "env-var";

export const envs = {
    port: get("PORT").required().asPortNumber() || 4000,
    development: get("DEVELOPMENT").asBool() || false,
    corsOrigin: get("CORS_ORIGIN").required().asString() || "http://localhost:3000",
    mercadoPagoAccessToken: get("MERCADO_PAGO_ACCESS_TOKEN").required().asString() || "TEST-1195047047327218-030511-8265a4d6b71d52a408017ed567c0b0ce-148678545",
    backUrlSuccess: get("BACK_URL_SUCCESS").required().asString() || "",
    backUrlPending: get("BACK_URL_PENDING").required().asString() || "",
    backUrlFailure: get("BACK_URL_FAILURE").required().asString() || "",
    apiAcda: get("API_ACDA").required().asString() || ""
};
