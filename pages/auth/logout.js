import React from "react";
import { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";


import { AuthContext } from "../../context/auth-context";
import { useEffect } from "react";

export default function logoutUser() {
    const router = useRouter();
    const auth = useContext(AuthContext);

    useEffect(()=>{
        auth.logout();
        router.push("/");
    })


}
