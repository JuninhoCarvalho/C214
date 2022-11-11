import { FaAlignLeft } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function ListByEmail() {

    const [user, setUsers] = useState([]);

    const [email, setEmail] = useState('');



    async function listByEmail(e) {
        e.preventDefault();

        const data = {
            email: email,
        }

        const response = await ClientUsers.listByEmail(data);

        if (response.status === 200) {
            setUsers(response.data)
            toast.success('Usuários buscado!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Buscar todos usuários">
                    <FaAlignLeft size={30} />
                </Title>

                <div className="container">
                    <form onSubmit={listByEmail}>

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Nome</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {user && 
                                        <tr key={1}>
                                            <td>{user.email} </td>
                                            <td>{user.nome} </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>

                        <button type="submit">Buscar Todos</button>

                    </form>
                </div>

            </div>
        </div>
    )
}