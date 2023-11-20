import React, {createContext, useContext, useState} from "react";

interface User {
    userId: string;
    password: string;
}

//define the type of context
interface UserContextState {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextState | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
};

// Define the provider component
export const UserContextProvider: React.FC = ({}) => {
    const [user, setUser] = useState<User | null>(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {}
        </UserContext.Provider>
    );
};
//

export default UserContextProvider;