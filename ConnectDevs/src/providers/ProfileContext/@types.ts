import { number } from "yup"

export interface iProfileContext {
    uploadLink: (data:iData ) => Promise<void>
    deleteLink: (id:iId ) => Promise<void>
    links: iLinks[]

}

export interface iItem{
    item: string
}

export interface iLinks{
    link:string
        userId: number
        id: number
       
}

export interface iDefaultProviderProps {
    children: React.ReactNode
}

export interface iData{
    link: string
    userId: number
}

export interface iId{
    id: number
    
}

export interface iInput {
    link: string
   data: iData
   userId: number
  }