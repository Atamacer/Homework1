export class Goods {
    private goodId: number;
    private goodName: string;
    private seller: string;
    private buyer: string;
    private countInStack: number;
    private price: number;

    constructor(
        goodId: number,
        goodName: string,
        seller: string,
        buyer: string,
        countInStack: number,
        price: number
    ) {
        this.goodId = goodId;
        this.goodName = goodName;
        this.seller = seller;
        this.buyer = buyer;
        this.countInStack = countInStack;
        this.price = price;
    }

    public getGoodId(): number {
        return this.goodId;
    }

    public getGoodName(): string {
        return this.goodName;
    }

    public getSeller(): string {
        return this.seller;
    }

    public getBuyer(): string {
        return this.buyer;
    }

    public getPrice(): number {
        return this.price;
    }

    public setSeller(seller: string): void {
        this.seller = seller;
    }

    public setBuyer(buyer: string): void {
        this.buyer = buyer;
    }

    public isSashEmpty(): boolean {
        return this.countInStack <= 0;
    }

    public toString(): string {
        return `Goods "${this.goodName}" (ID: ${this.goodId}), Цена: ${this.price}, Остаток: ${this.countInStack}`;
    }
}