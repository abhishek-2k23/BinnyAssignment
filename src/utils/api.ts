import { CACHE_KEYS, cacheData, getCachedData } from './cache';

const apiUrl = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
    try{
        const response = await fetch(`${apiUrl}/users`);
        const data = await response.json();
        
        //cache data
            await cacheData(CACHE_KEYS.USERS_LIST, data);
        
        return data;
    }catch(e){
        console.log("error in fetching users: ", e);
        
        // If n/w fails
        const cachedData = await getCachedData(CACHE_KEYS.USERS_LIST);
        if (cachedData) {
            console.log("Using cached users data");
            return cachedData;
        }
        
        throw e;
    }
}

export const fetchUserDetails = async(id: number) => {
    try{
        const response = await fetch(`${apiUrl}/users/${id}`);
        const data = await response.json();
        
        // Cache data
            await cacheData(CACHE_KEYS.USER_DETAILS(id), data);
        
        return data;
    }catch(e){
        console.log("error in fetching user details: ", e);
        
        // on n/w failure
        const cachedData = await getCachedData(CACHE_KEYS.USER_DETAILS(id));
        if (cachedData) {
            console.log("Using cached user details");
            return cachedData;
        }
        
        throw e;
    }
}