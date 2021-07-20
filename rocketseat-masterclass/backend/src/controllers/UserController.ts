import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Dani1', email: 'dani1@email.com' },
    { name: 'Dani2', email: 'dani2@email.com' },
    { name: 'Dani3', email: 'dani3@email.com' },
];

export default {
    async index(req: Request, res: Response) {
    return res.json(users);
    },

    async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
        to: { 
            name: 'Dani Perse',
            email: 'danyperse@email.com'
        },
        message: { 
            subject: 'Bem-vinda ao sistema',
            body: 'Seja bem-vinda!!!'
        }
    });

    return res.send();
    }
};