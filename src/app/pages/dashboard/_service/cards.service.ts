import { Injectable } from '@angular/core';
import { Icard } from '../_schema/Icard';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CardsService {
    constructor() { }

    GetCardsDetail() {
        const cards: Icard[] = [
            {
                title: 'Tammam Altammam',
                cardNumber: 9417,
                balance: 16003,
                subTitle: 'Marketing Department',
                validUntil: new Date(2026, 12, 1),
                color: '#8B5CF6'
            },
            {
                title: 'Tammam Altammam',
                cardNumber: 9417,
                balance: 16003,
                subTitle: 'Marketing Department',
                validUntil: new Date(2026, 12, 1),
                color: '#3B82F6'

            },
            {
                title: 'Tammam Altammam',
                cardNumber: 9417,
                balance: 16003,
                subTitle: 'Marketing Department',
                validUntil: new Date(2026, 12, 1),
                color: '#14B8A6'
            },
            {
                title: 'Tammam Altammam',
                cardNumber: 9417,
                balance: 16003,
                subTitle: 'Marketing Department',
                validUntil: new Date(2026, 12, 1),
                color: '#F97316'
            },
            {
                title: 'Tammam Altammam',
                cardNumber: 9417,
                balance: 16003,
                subTitle: 'Marketing Department',
                validUntil: new Date(2026, 12, 1),
                color: '#84CC16'
            },
            {
                title: 'Tammam Altammam',
                cardNumber: 9417,
                balance: 16003,
                subTitle: 'Marketing Department',
                validUntil: new Date(2026, 12, 1),
                color: '#EC4899'
            },
        ]
        return of(cards);
    }
}
