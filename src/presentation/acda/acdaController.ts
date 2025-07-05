import { Request, Response } from 'express';
import { httpResponse } from '../../infrastructure/utils/httpResponse';
import { CustomerDto } from '../../domain/Dtos/customerDto';
import { sendPaymentUseCase } from '../../application/useCases/acda/sendPaymentUseCase';
import { PayTypeDto } from '../../domain/Dtos/payTypeDto';

export const processPayment = async (req: Request, res: Response) => {
    try {
        const { payment_id } = req.params;
        const payload: CustomerDto = req.body;
        const payType = req.query.type as PayTypeDto;

        if (!Object.values(PayTypeDto).includes(payType)) {
            httpResponse.internalServer(res, 'Internal Server Error', 'Invalid payment type');
        }

        const response = await sendPaymentUseCase(Number(payment_id), payload, payType);

        httpResponse.success(res, response, 'Pago enviado correctamente');

    } catch (error) {
        console.error('Error details:', error);
        httpResponse.internalServer(res, error as string, 'Error a la hora de procesar el pago');
    }
}