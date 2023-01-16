import { createContext, useContext, useState } from "react";
import axios from "../../api/axios_sajat";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const getUser = async () => {
        try{
            const {data} = await axios.get('/api/user');
            setUser(data);
        }catch(error){
            console.log("Az oldal tartalmának megtekintéséhez bejelentkezés szükséges.");
        }        
    }

    const login = async ({ ...data }) =>{
        await csrf();
        setErrors([]);
        try{
            await axios.post('/login', { ...data });
            await getUser();
            navigate("/partner");
        }catch(error){
            if(error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
    }

    const logout = () => {
        axios.post('logout').then(() => {
            setUser(null);
            navigate('/login')
        });
    }

    useEffect(() => {
        if(!user){
            getUser()
        }
    }, []);

    return <AuthContext.Provider value={{ user, errors, getUser, login, logout}} >
         { children }
    </AuthContext.Provider>       
}

export default function useAuthContext(){
    return useContext(AuthContext);
}
