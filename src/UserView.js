import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserView() {
    const params = useParams();
    const [userList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        //On Load
        getUsers();
        console.log("welcome to userview");
    }, []);

    let getUsers = async () => {
        try {
            const user = await axios.get(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`);
            // console.log(user);
            setUserList(user.data);
            // console.log(userList);
            setLoading(false);
        } catch (error) {
            console.log(error);
            // setLoading(false);
        }
    }

    return (
        <>
            <center><h5 >L'utilisateur : [<b>  {userList.username}  </b>]</h5> </center><br></br>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Détails d'utilisateur</h6>
                </div>
                <div className="card-body">
                    {
                        isLoading ? <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' />
                            :
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>E-Mail</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Country</th>
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        <tr>
                                            <td>{userList.id}</td>
                                            <td> {userList.username} </td>
                                            <td>{userList.email}</td>
                                            <td>{userList.city}</td>
                                            <td>{userList.state}</td>
                                            <td>{userList.country}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    }
                   <center > <br></br>
                   
                   
{userList.country === "Fournisseur" && (
  <img width={"50%"} src='https://www.clicfacture.com/wp-content/uploads/2018/05/livraison-fournisseurs-achats-gestion-commerciale.png' alt='Fournisseur Image' />
)}
{userList.country === "Visteur" && (
  <img width={"50%"} src='https://png.pngtree.com/png-vector/20221021/ourmid/pngtree-female-client-or-visitor-talking-with-receptionist-png-image_6334035.png' alt='Fournisseur Image' />
)}
{userList.country === "Client" && (
  <img width={"50%"} src='https://as2.ftcdn.net/v2/jpg/05/10/16/83/1000_F_510168318_UdfUrihpgDbWLuL0319Xrv5SOn4hYXc8.jpg' alt='Fournisseur Image' />
)}
{userList.country === "Participant" && (
  <img width={"50%"} src='https://img.freepik.com/free-vector/couple-with-backpacks-walking-outdoors-tourists-with-nordic-poles-hiking-mountains-flat-vector-illustration-vacation-travel-trekking-concept_74855-9831.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph' alt='Fournisseur Image' />
)}
                   
                   </center>
                </div>
            </div>
        </>

    )
}

export default UserView