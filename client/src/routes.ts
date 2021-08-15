import Admin from './page/Admin'
import {ADMIN_ROUTE, LANDING_ROUTE, LOGIN_ROUTE, USERLIST_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Auth from './page/Auth';
import UserList from './page/UserList'
import Landing from './page/Landing';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    // {
    //     path: USERLIST_ROUTE,
    //     Component: UserList
    // },
]

export const publicRoutes = [


    {
        path: USERLIST_ROUTE,
        Component: UserList
    },

    {
        path: LANDING_ROUTE,
        Component: Landing
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

]