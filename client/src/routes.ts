
import {ADMIN_ROUTE, LANDING_ROUTE, LOGIN_ROUTE, NOTES_ROUTE, RESERTPASSWORD_ROUTE, USERLIST_ROUTE} from "./utils/consts";
import Landing from './components/Landing/Landing';
import LoginForm from "./components/LoginForm/LoginForm";
import UserList from "./components/UserList/UserList";
import Admin from "./components/Admin/Admin";
import ResertPassword from "./components/ResertPassword/ResertPassword";
import Notes from "./components/Notes/Notes";

export{}



export const authRoutes = [
    {
        path: USERLIST_ROUTE,
        Component: UserList
    },


    {
        path: ADMIN_ROUTE,
        Component:Admin
    },

    {
        path: NOTES_ROUTE,
        Component: Notes
    }
]

export const publicRoutes = [

    {
        path: RESERTPASSWORD_ROUTE,
        Component: ResertPassword
    },


    {
        path: LANDING_ROUTE,
        Component: Landing
    },

    {
        path: LOGIN_ROUTE,
        Component: LoginForm
    },


]