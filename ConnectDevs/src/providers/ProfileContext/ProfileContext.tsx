import { createContext, useState } from 'react'
import { iProfileContext, iDefaultProviderProps, iData, iId } from './@types'
import { api } from '../../services/api'


export const ProfileContext = createContext({} as iProfileContext)

export const ProfileProvider = ({children}: iDefaultProviderProps) => {

    const [links, setLinks] = useState({})

    const uploadLink = async (data:iData) => {
        const userToken = JSON.parse(localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null')
        console.log(userToken)
        try{
            const response = await api.post('/links', data, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                  },
            })
            console.log(response)
        } catch(error){
            console.log(error)
        }
    }

    const deleteLink = async (id: iId) => {
        const userToken = JSON.parse(localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null')
        try{
            const response = await api.delete(`/link${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            console.log(response)
        }
        catch{
            console.log('erro delete link')
        }
    }

    const renderLink = async () => {
        try{
            const response = await api.get('/link')
            setLinks(response.data)
        }
        catch{
            console.log('erro render link')
        }
    }

    return(
        <ProfileContext.Provider value={{
            uploadLink,
            deleteLink,
            renderLink,
            links
        }}>
            {children}
        </ProfileContext.Provider>
    )

}