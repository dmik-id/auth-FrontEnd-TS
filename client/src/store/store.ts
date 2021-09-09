import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";


import UserService from "../services/UserService";

// import { useHistory } from "react-router-dom";
// import { USERLIST_ROUTE } from "../utils/consts";
export{}


export default class Store {

    _isAuth:boolean
    _user:IUser

    _isLoading:boolean

    constructor() {
        if (localStorage.length !== 0){
            this._isAuth = true
        }
        else{
            this._isAuth = false
        }
        
        this._user = {} as IUser
        this._isLoading = false
        makeAutoObservable(this)
    }

    setAuth(bool:boolean) {
        this._isAuth = bool
    }
    setUser(user:IUser) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }

    setLoading(bool: boolean) {
        this._isLoading = bool;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
     
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e);
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            console.log(response)
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
         } catch (e) {
            console.log(e);
        }
    }


    async addRoleToUser(value:string, userId:number){
        const response = await AuthService.addRoleToUser(value, userId)
        console.log(response)
    }


    async addRole(value:string, description:string){
        const response = await AuthService.addRole(value, description)
        console.log(response)
    }

    // async getRole(value:string){
    //     const response = await AuthService.getRole(value)
    //     console.log(response)
    // }


}
