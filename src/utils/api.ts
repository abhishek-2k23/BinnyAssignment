const apiUrl = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
    try{
        const response = await fetch(`${apiUrl}/users`);
        const data = await response.json();
        return data;
    }catch(e){
        console.log("error in fetching users: ", e);
    }
}

export const fetchUserDetails = async(id: number) => {
    try{
        const response = await fetch(`${apiUrl}/users/${id}`);
        const data = await response.json();
        return data;
    }catch(e){
        console.log("error in fetching user details: ", e);
    }
}