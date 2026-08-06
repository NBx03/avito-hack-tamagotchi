import type { User } from "../types/auth";


const API_URL = "/api";


export async function login(
    email: string,
    password: string
): Promise<User> {

    const response = await fetch(
        `${API_URL}/auth/login`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            credentials: "include",

            body: JSON.stringify({
                email,
                password,
            }),
        }
    );


    if (!response.ok) {
        throw new Error("Ошибка авторизации");
    }


    return response.json();
}


export async function register(
    email: string,
    password: string,
    displayName: string
): Promise<User> {

    const response = await fetch(
        `${API_URL}/auth/register`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            credentials: "include",

            body: JSON.stringify({
                email,
                password,
                displayName,
            }),
        }
    );


    if (!response.ok) {
        throw new Error("Ошибка регистрации");
    }


    return response.json();
}