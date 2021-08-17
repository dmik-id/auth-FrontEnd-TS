// import Admin from './page/Admin'


import {ADMIN_ROUTE, LANDING_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Auth from './components/LoginForm';
// import UserList from './page/UserList'
import Landing from './components/Landing';
import LoginForm from "./components/LoginForm";

export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // },
    // {
    //     path: USERLIST_ROUTE,
    //     Component: UserList
    // },
]

export const publicRoutes = [
    {
        path: LANDING_ROUTE,
        Component: Landing
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginForm
    },
    {
        path: REGISTRATION_ROUTE,
        Component: LoginForm
    },

]
export{}