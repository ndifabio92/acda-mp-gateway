import { getPayment } from "../../../infrastructure/adapters/mercadopago/paymentsMercadoPagoAdapter";

export const getPaymentUseCase = async (payment_id: number) => {
    try {
        const response = await getPayment(payment_id);

        if (response.api_response.status === 200) {
            return response;
        }

    } catch (error) {
        console.error('Error al obtener el pago en Mercado Pago (Use Case):', error);
        throw error;
    }
};
