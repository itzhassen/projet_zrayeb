import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Userlist() {

  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    //On Load
    getUsers();
    console.log("welcome");
  }, []);

  let getUsers = async () => {
    try {
      const users = await axios.get("http://localhost:3001/users");
      setUserList(users.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure do you want to delete the data?");
      if (confirmDelete) {
        await axios.delete(`http://localhost:3001/users/${id}`);
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Liste des Adhérents</h1>
        <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Nouveau Adhérent
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Invités de Zrayeb</h6>
        </div>
        <div className="card-body">
          {
            isLoading ? <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' />
              : <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nom</th>
                      <th>E-Mail</th>
                      <th>Lieu</th>
                      <th>Ville</th>
                      <th>Profile</th>
                      <th>Action</th>

                    </tr>
                  </thead>
               
                  <tbody>
                    {userList.map((user) => {
                      return (
                        <tr>
                          <td>{user.id}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.lieu}</td>
                          <td>{user.ville}</td>
                          <td>{user.profil}</td>
                          <th>
                            <Link to={`/portal/user-view/${user.id}`} className='btn btn-primary btn-sm mr-1'>Détails</Link>
                            <Link to={`/portal/user-edit/${user.id}`} className='btn btn-info btn-sm mr-1'>Modifier</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-danger btn-sm mr-1'>Supprimer</button>
                          </th>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
          }

        </div>
      </div>
    </>
  )
}

export default Userlist