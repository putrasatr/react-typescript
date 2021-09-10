import { userData } from "../constants";
export function checkPalindrome(s: string) {
    const n = s.slice(0, s.length - 1).split('').reverse().join('')
    return s + n
}

export function checkUser(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        if (userData.password === password && userData.username === username)
            resolve(true)
        reject(false)
    })
}
export const inputValidator = (n: string, t: string) => {
    if (t === "username")
        return /[A-Z]/.test(n) ? "" : "First letter must capital"
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(n) ? "" : "Min 8 char and must contain at least one number "
}