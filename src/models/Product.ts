export class Product<T> {
  constructor (
    public name: string,
    public categoryId: number,
    public id?: T
  ) {}
}