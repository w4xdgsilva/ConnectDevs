import { createContext } from 'react'
import { iProfileContext, iDefaultProviderProps, iData, iId } from './@types'
import { api } from '../../services/api'


export const ProfileContext = createContext({} as iProfileContext)

export const ProfileProvider = ({children}: iDefaultProviderProps) => {

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
        const token = window.localStorage.getItem('@CONNECTDEVS:TOKEN')
        try{
            const response = await api.delete(`/link${id}`, {
                headers: {
                    'Content-Type': 'application/json',
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
            console.log(response)
        }
        catch{
            console.log('erro render link')
        }
    }

    return(
        <ProfileContext.Provider value={{
            uploadLink,
            deleteLink,
            renderLink
        }}>
            {children}
        </ProfileContext.Provider>
    )

}