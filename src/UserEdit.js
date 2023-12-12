import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UserEdit() {
  const params = useParams();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const user = await axios.get(`http://localhost:3001/users/${params.id}`);
      myFormik.setValues(user.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const myFormik = useFormik({
    initialValues: {
      username: '',
      email: '',
      lieu: '', // updated to lieu
      ville: '', // updated to ville
      profil: '', // updated to profil
    },
    validate: (values) => {
      // Your validation logic
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.put(`http://localhost:3001/users/${params.id}`, values);
        setLoading(false);
        navigate('/portal/user-list');
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  });

  return (
    <>
      <h3>User Edit - ID: {params.id}</h3>
      <div className="container">
        <form onSubmit={myFormik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Nom</label>
              <input
                name="username"
                value={myFormik.values.username}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${myFormik.errors.username ? 'is-invalid' : ''}`}
              />
              <span style={{ color: 'red' }}>{myFormik.errors.username}</span>
            </div>

            <div className="col-lg-6">
              <label>E-Mail</label>
              <input
                name="email"
                value={myFormik.values.email}
                onChange={myFormik.handleChange}
                type="email"
                className={`form-control ${myFormik.errors.email ? 'is-invalid' : ''}`}
              />
              <span style={{ color: 'red' }}>{myFormik.errors.email}</span>
            </div>

            <div className="col-lg-6">
              <label>Lieu</label>
              <input
                name="lieu"
                value={myFormik.values.lieu}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${myFormik.errors.lieu ? 'is-invalid' : ''}`}
              />
              <span style={{ color: 'red' }}>{myFormik.errors.lieu}</span>
            </div>

            <div className="col-lg-6">
              <label>Ville</label>
              <input
                name="ville"
                value={myFormik.values.ville}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${myFormik.errors.ville ? 'is-invalid' : ''}`}
              />
              <span style={{ color: 'red' }}>{myFormik.errors.ville}</span>
            </div>

            <div className="col-lg-6">
              <label>Profile</label>
              <input
                name="profil"
                value={myFormik.values.profil}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${myFormik.errors.profil ? 'is-invalid' : ''}`}
              />
              <span style={{ color: 'red' }}>{myFormik.errors.profil}</span>
            </div>

            <div className="col-lg-6 mt-3">
              <input
                disabled={isLoading}
                type="submit"
                value={isLoading ? 'Updating...' : 'Update'}
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserEdit;
