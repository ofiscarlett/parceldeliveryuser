
//const dbUrl = 'http://localhost:3001/login';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserLoginData {
    isAuthed: boolean;
    user: any;
    //password: string;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    }
// Create the context with a default value
export const UserContext =  createContext<UserLoginData | undefined>(undefined);