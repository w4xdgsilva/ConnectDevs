import { useEffect, useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../providers/UserContext/UserContext'

export const ProtectedRoutes = () => {
    const { userData } = useContext(UserContext)
    const navigate = useNavigate()
    const userToken = JSON.parse(localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null')

    useEffect(() => {
        if (!userToken) {
            navigate('/login')
        }
    }, [])

    return (
        <>
            {userData && <Outlet />}
            {!userData && null}
        </>
    )
}
