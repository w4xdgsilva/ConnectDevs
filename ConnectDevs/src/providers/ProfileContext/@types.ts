export interface iProfileContext {
    uploadLink: (data:iData ) => Promise<void>
    deleteLink: (id:iId ) => Promise<void>
    renderLink: () => Promise<void>

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