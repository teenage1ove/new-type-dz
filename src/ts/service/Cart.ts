import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    get total(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    totalWithDiscount(percent: number): number {
        return this.total - (this.total / 100 * percent);
    }

    deleteItemFromCart(id: number): void {
        this._items = this._items.filter(item => item.id !== id)
    }
}