

// fetches all the users as example data 
export async function getSomeAPIData() {
    const response = await fetch('/api/users');
    return await response.json();
}
