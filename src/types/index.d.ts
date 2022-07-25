export{};
declare global {
    namespace Express{
        interface TokenPayload {
            name: string,
            email: string, 
            picture: any, 
        }
    }
}