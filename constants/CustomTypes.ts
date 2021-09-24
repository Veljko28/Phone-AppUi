export interface Phone {
  id: number | string,
  image: any,
  name: string,
  description?: string,
  price: string | number,
}

export interface ReviewItem {
  rating: number,
  userName: string,
  description: string,
  date: Date | string
}

export interface CartForm {
    firstName: string,
    lastName: string,
    address: string,
    town: string,
    postCode: string,
    phoneNum: string
}