import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
    
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}
    
    format() {
        return `${this.recipient} was paid £${this.amount} for ${this.details}`;
    }};