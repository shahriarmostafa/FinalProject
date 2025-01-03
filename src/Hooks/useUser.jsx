import { useContext } from "react";
import {AuthContext} from '../AuthProvider/AuthProvider';

const useUser = () => {
    const {user} = useContext(AuthContext)
    return user
}

export default useUser;