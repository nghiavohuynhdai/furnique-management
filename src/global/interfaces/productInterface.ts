import { ICategory } from './categoriesInterface'

export interface IVariant {
  sku: string
  price: number
  quantity: number
  dimensions: {
    height: number
    width: number
    length: number
  }
  keyValue: {
    color: string
    material: string
  }
}
export interface IProduct {
  _id: string
  name: string
  description: string
  images: string[]
  rate: number
  brand: string
  variants: IVariant[]
  categories: ICategory[]
  status: string
  createdAt: string
  updatedAt: string
}

export interface IProductsResponse {
  docs: IProduct[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: null | number
  nextPage: null | number
}

export interface IProductRows {
  _id: string
  name: string
  sku: string
  category: string
  stock: number
  price: number
  status: string
  added: Date
}