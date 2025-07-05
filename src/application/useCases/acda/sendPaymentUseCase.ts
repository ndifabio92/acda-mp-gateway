import { CustomerDto } from '../../../domain/Dtos/customerDto';
import { PayTypeDto } from '../../../domain/Dtos/payTypeDto';
import { sendPaymentAdapter } from '../../../infrastructure/adapters/acda/paymentAcdaAdapter';
import { getPaymentUseCase } from '../mercadoPago/getPaymentUseCase';

export const sendPaymentUseCase = async (payment_id: number, payload: CustomerDto, payType: PayTypeDto) => {
    try {

        const paymentResponse = await getPaymentUseCase(payment_id);

        if (paymentResponse?.api_response.status === 200) {
            await sendPaymentAdapter(paymentResponse, payload, payType);
        }

    } catch (error) {
        console.error('Error al enviar el pago a ACDA API (Use Case):', error);
        throw error;
    }
}; 