export function objectvalidator(obj){
    let isValid = true;
    for (let prop in obj){
        if (prop ===''){
            isValid = false;
            return;
        }
    }
    return isValid;
}