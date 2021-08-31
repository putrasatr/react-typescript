export function checkPalindrome(s: string) {
    const n = s.slice(0, s.length - 1).split('').reverse().join('')
    return s + n
}