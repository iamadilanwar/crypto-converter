
export interface Rates {
    NEP : number;
    BUSD : number;
}
export interface currencyData {
    success: boolean;
    timestamp: number;
    base: string;
    date: string;
    rates: Rates
}