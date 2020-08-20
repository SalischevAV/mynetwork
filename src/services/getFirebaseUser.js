import { SERVER } from '../server';

export function returnUser(user){
    console.log(typeof user)
    return user
}
export async function getFirebaseUser(id){
    try{
        let response = await fetch(SERVER + '/users/firebase/' + id);
        let data = await response.json();
        returnUser(data);
    }
    catch(err){
        console.log(err.message);        
    }

}

