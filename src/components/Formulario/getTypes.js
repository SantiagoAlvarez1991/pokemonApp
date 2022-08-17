export const getTypes = async()=>{
    const request = await fetch('https://pokeapi.co/api/v2/type/')
    const response = request.json()
    return response
}