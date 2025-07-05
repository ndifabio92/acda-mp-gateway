import { ItemDto } from '../../../domain/Dtos/itemDto';
import preferenceMercadoPagoAdapter from '../../../infrastructure/adapters/mercadopago/preferenceMercadoPagoAdapter';

export const createPreferenseUseCase = async (items: ItemDto[]) => {
    try {
        return await preferenceMercadoPagoAdapter(items);

    } catch (error) {
        console.error('Error al crear la preferencia en Mercado Pago (Use Case):', error);
        throw error;
    }
};
