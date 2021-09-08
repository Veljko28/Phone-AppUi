export interface Phone {
  image: any,
  name: string,
  description: string,
  price: string | number,
}

export interface ReviewItem {
  rating: number,
  userName: string,
  description: string,
  date: Date | string
}