export class City {
  constructor(
    public _id: number,
    public code: string,
    public lat: number,
    public lon: number,
    public name: string,
    public weatherLocation?: string
    ){}
}
