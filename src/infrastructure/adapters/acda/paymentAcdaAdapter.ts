import axios from 'axios';
import { envs } from '../../config/envs';
import { PaymentResponse } from 'mercadopago/dist/clients/payment/commonTypes';
import { CustomerDto } from '../../../domain/Dtos/customerDto';
import { PayTypeDto } from '../../../domain/Dtos/payTypeDto';

const createAcdaApiClient = (token: string) => axios.create({
    baseURL: envs.apiAcda,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});

export const sendPaymentAdapter = async (paymentData: PaymentResponse, payload: CustomerDto, payType: PayTypeDto): Promise<any> => {
    try {
        const acdaApiClient = createAcdaApiClient(payload.jwt);
        const response = await acdaApiClient.post('/payments/register-pay', {
            paymentId: paymentData.id,
            status: paymentData.status,
            amount: paymentData.transaction_amount,
            currency: paymentData.currency_id,
            paymentMethod: paymentData.payment_method_id,
            paymentType: paymentData.payment_type_id,
            updatedAt: paymentData.date_last_updated,

            dateCreated: paymentData.date_created,
            email: payload.email,
            description: paymentData.description,
            type: payType
        });

        return response.data;

    } catch (error) {
        console.error('Error al enviar el pago a ACDA API (Adapter):', error);
        throw error;
    }
}; 