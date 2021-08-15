import {makeAutoObservable} from "mobx";
import { IUser } from "../models/IUser";

export default class UserStore {

    _isAuth:boolean = false
    _user = {} as IUser

    constructor() {

        makeAutoObservable(this)
    }

    setIsAuth(bool:boolean) {
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
}