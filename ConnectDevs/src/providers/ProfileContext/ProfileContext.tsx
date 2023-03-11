import { createContext, useEffect, useState } from 'react'
import { iProfileContext, iDefaultProviderProps, iData, iId, iLinks } from './@types'
import { api } from '../../services/api'



export const ProfileContext = createContext({} as iProfileContext)

export const ProfileProvider = ({children}: iDefaultProviderProps) => {

    const [links, setLinks] = useState<iLinks[]>([])

    const uploadLink = async (data:iData) => {

        const userToken = JSON.parse(localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null')
        
        try{
            const response = await api.post('/links', data, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                  },
            })
            console.log(response.data)
            setLinks(response.data)
            renderLink()
        } catch(error){
            console.log(error)
        }
    }

    const deleteLink = async (id: iId) => {
        const userToken = JSON.parse(localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null')
        try{
            const response = await api.delete(`/links/${id}`, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                  },
            })
            console.log(response)
            renderLink()
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        renderLink()
    }, [])

    const renderLink = async () => {
        const Token = JSON.parse(localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null')
        try{
            const response = await api.get('/links',{
                headers: {
                    Authorization: `Bearer ${Token}`,
                  },
            })
            setLinks(response.data)
        }
        catch(error){
            console.log(error)
        }
    }


   



    return(
        <ProfileContext.Provider value={{
            uploadLink,
            deleteLink,
            links
            
        }}>
            {children}
        </ProfileContext.Provider>
    )

}