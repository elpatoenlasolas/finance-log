import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
    
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}
    
    format() {
        return `${this.client} has to pay $${this.amount} for ${this.details} to the provided bank account details.`;
    }
    }

