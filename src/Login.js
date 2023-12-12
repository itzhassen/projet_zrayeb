import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Make an API request to check if the email exists
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.data.success) {
        navigate('/portal/dashboard');
      } else {
        setError('Email ou mot de passe incorrect. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setError('Une erreur s\'est produite. Veuillez réessayer plus tard.');
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
                      Welcome to Groupement <b>Zrayeb</b> Djerba
                    </h1>
                  </div>
                  <form className="user" onSubmit={handleLogin}>
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
                      Login
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

export default Login;
