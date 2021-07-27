import { Quantity } from "./quantity";

export class Food {
    foodName: string = '';
    quantity: Quantity = {amount: 0, unit: ''};
    goodFor: number = 0;
}