import { Address } from './Address';

export interface RealEstateProperty {
  id: string,
  title: string,
  address: Address,
  location: string
  bedrooms: number,
  bathrooms: number
  price: number,
  sqft: string,
  built: string,
  lotspace: string,
  description: string,
  listedby: {
    author: string,
    organization: string
  },
  contact: {
    phone: string,
    email: string
  },
  images: string[]
}

