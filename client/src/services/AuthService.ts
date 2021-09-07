import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        const data = await $api.post<AuthResponse>('/auth/login', {email, password})

        // localStorage.setItem('token', data.data)
        
        return data
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/registration', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }

}

