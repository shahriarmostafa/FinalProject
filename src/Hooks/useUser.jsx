import { useContext } from "react";
import {AuthContext} from '../AuthProvider.jsx/AuthProvider';

const useUser = () => {
    const {user} = useContext(AuthContext)
    return user
}

export default useUser;