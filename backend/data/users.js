import bcrypt from 'bcryptjs';

const users = [
    {
        name:'AdminUser',
        email:'admin@gmail.com',
        password:bcrypt.hashSync('123',10),
        isAdmin:true
    },
    {
        name:'Maruf',
        email:'maruf@gmail.com',
        password:bcrypt.hashSync('123',10),
        isAdmin:false
    },
    {
        name:'Mou',
        email:'mou@gmail.com',
        password:bcrypt.hashSync('123',10),
        isAdmin:false
    },
];

export default users;