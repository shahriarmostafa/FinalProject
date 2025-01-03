import { useQuery } from '@tanstack/react-query';
import './Dashboard.css';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import User from './User';

export default function AllUsers(){
    const axiosSecure = useAxiosSecure()

    const {data: users =[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
            const result = await axiosSecure.get('/users');
            return result.data
        }
    })

    return (
            <section className="db-carts">
                <div className="container">
                    <div className="carts users">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>ID</th>
                                    <th>Role</th>
                                    <th>Delete</th>
                                </tr>
                                {
                                    users.map(x => {
                                        return <User fun={refetch} role={x.role} name={x.name} key={x._id} email={x.email} id={x._id}></User>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
    )
}