
export const Userlist = async () => await fetch(`https://reqres.in/api/users?page=2`,
    { method: 'get',}
).then(user => user.json()).catch(err => err)