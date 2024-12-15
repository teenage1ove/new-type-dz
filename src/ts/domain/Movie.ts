import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly slogan: string,
    readonly year: number,
    readonly country: string,
    readonly sganr: string,
    readonly time: string
  ) {}
}
