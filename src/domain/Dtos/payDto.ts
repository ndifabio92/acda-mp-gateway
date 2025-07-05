import { PayTypeDto } from "./payTypeDto";

export interface PayDto {
    dateCreated: Date,
    description: string,
    email: string,
    type: PayTypeDto
}