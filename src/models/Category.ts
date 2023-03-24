export class Category<T> {
  constructor (
    public name: string,
    public id?: T
  ) {}
}