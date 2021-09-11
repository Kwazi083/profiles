import React, {useState} from 'react';

const Users = () => {
    const [users,setUsers] = useState([
        {
            name: 'Kamo Matloga',
            email: 'kamo@mail.com',
            phone: '0811352485',
            business: 'Retail',
            id: 1111
        },
        {
            name: 'Remi Doe',
            email: 'remi@mail.com',
            phone: '765819622',
            business: 'Software Development solutions',
            id: 2222
        },
        {
            name: 'Evelyn Doe',
            email: 'evelyn@mail.com',
            phone: '0766665552',
            business: 'Software Development Consultent',
            id: 33333
        }
    ]);
    return(
        <div>
            {Users.map(user => (
            <li>{user.name}</li>
        ))}
        </div>
    );
}

export default Users;