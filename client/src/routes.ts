
// import Admin from './page/Admin'
import {ADMIN_ROUTE, LANDING_ROUTE, LOGIN_ROUTE, USERLIST_ROUTE} from "./utils/consts";
// import Auth from './page/Auth';
// import UserList from './page/UserList'
import Landing from './components/Landing';
import LoginForm from "./components/LoginForm";
import UserList from "./components/UserList";
import Admin from "./components/Admin";

export{}

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Comment:Admin
    }
]


export const authRoutes = [

    {
        path: USERLIST_ROUTE,
        Component: UserList
    },
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


]