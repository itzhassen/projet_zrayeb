import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'https://63a9bccb7d7edb3ae616b639.mockapi.io/users';

      const response = await axios.post(apiUrl, {
        nom,
        prenom,
        email,
        password,
      });

      if (response.status === 201) {
        console.log('Utilisateur ajouté avec succès:', response.data);
        navigate('/portal/dashboard');
      } else {
        console.error('Erreur lors de la création de l\'utilisateur');
        setError('Erreur lors de la création de l\'utilisateur');
      }
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
      setError('Erreur lors de la création de l\'utilisateur');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* <!-- Nested Row within Card Body --> */}
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Register dans <b>Zrayeb</b> Djerba
                    </h1>
                  </div>
                  <form className="user" onSubmit={handleLogin}>
                  <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleInputNom"
                        placeholder="Enter Votre Nom..."
                        name="nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleInputPreNom"
                        placeholder="Enter Votre Prenom..."
                        name="prenom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                    
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                   
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                        <label className="custom-control-label" htmlFor="customCheck">
                          Remember Me
                        </label>
                      </div>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
          
                    <button type="submit" className="btn btn-primary btn-user btn-block">
                      Créer Compte
                    </button>
                    <hr />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
