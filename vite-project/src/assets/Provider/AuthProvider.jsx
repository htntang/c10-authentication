import React, { createContext } from "react";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();

    const login = (username, password) => {
        if (username && password === "password") {
            setUser({username});
        }
        setLoading(false);
    };

    const logout = () => {
        setUser(null);
        setLoading();
    };

    useEffect(() => {
        const getUser = async () => {
            setUser({username: "useEffectTester"});
        };
        getUser()
    },[])

    return <div>AuthProvider</div>
};