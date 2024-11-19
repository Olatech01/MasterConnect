"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { AuthContext } from "./AuthContext";

const UserContext = createContext();

const UserProvider = ({ children }) => { 
    const { logout } = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [userType, setUserType] = useState({}); 
    const [profileImage, setProfileImage] = useState(null);
    const router = useRouter();

    const updateUser = (userData) => {
        setUser(userData);
        setUserType(userData)
    };

    const updateProfileImage = (imageUrl) => {
        setProfileImage(imageUrl);
    };

    const logIn = (token) => {
        setCookie("token", token);
    };

    const logOut = () => {
        logout();
        deleteCookie("token");
        deleteCookie("userData");
        deleteCookie("profileImage");
        setUser({});
        setProfileImage(null);
        router.push("/auth/login"); 
    };

    useEffect(() => {
        const savedUserData = getCookie("userData");
        if (savedUserData) {
            const userDataInfo = JSON.parse(savedUserData);
            updateUser(userDataInfo);
        }

        if (user.avatar) {
            setProfileImage(`https://${user.avatar}`);
        }
    }, [user.avatar]);

    return (
        <UserContext.Provider value={{ user, userType, profileImage, updateUser, updateProfileImage, logOut, logIn }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
