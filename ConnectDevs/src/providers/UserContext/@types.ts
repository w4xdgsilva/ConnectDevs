export interface iDefaultProviderProps {
    children: React.ReactNode
}

export interface iDefaultErrorResponse {
    data: string
}

export interface iUserData {
    id: number
    name: string
    email: string
    username: string
}

export interface iRegisterFormData {
    name: string
    email: string
    username: string
    password: string
    confirmPassword: string
}

export interface iLoginFormData {
    email: string
    password: string
}

export interface iApiUserResponseData {
    accessToken: string
    user: {
        id: string
        name: string
        email: string
        username: string
    }
}

export interface iApiAutoLoginResponseData {
    id: number
    name: string
    email: string
    username: string
    password?: string
    confirmPassword?: string
}

export interface iUserContext {
    isLoading: boolean
    userRegister: (formData: iRegisterFormData) => Promise<void>
    userLogin: (formData: iLoginFormData) => Promise<void>
    userLogout: () => void
    userData: iUserData | null
}