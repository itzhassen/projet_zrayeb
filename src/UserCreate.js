import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserCreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik(
    {
      initialValues: {
        username: "",
        email: "",
        password: "", // Ajout du champ de mot de passe
        lieu: "",
        ville: "",
        profil: ""
      },
      // Validation du formulaire lors de la saisie des données
      validate: (values) => {
        let errors = {};

        if (!values.username) {
          errors.username = "Veuillez entrer un nom d'utilisateur";
        } else if (values.username.length < 5) {
          errors.username = "Le nom ne doit pas contenir moins de 5 lettres";
        } else if (values.username.length > 20) {
          errors.username = "Le nom ne doit pas contenir plus de 20 lettres";
        }

        if (!values.email) {
          errors.email = "Veuillez entrer une adresse e-mail";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Adresse e-mail invalide';
        }

        if (!values.password) {
          errors.password = "Veuillez entrer un mot de passe";
        } else if (values.password.length < 6) {
          errors.password = "Le mot de passe doit contenir au moins 6 caractères";
        }

        if (!values.lieu) {
          errors.lieu = "Veuillez sélectionner une ville";
        }

        if (!values.ville) {
          errors.ville = "Veuillez sélectionner un état";
        }

        if (!values.profil) {
          errors.profil = "Veuillez sélectionner un pays";
        }

        return errors;
      },
      // On peut soumettre le formulaire uniquement si la validation retourne une valeur vide (validation réussie) sinon ne peut pas être soumis
      onSubmit: async (values) => {
        console.log('Submitting form with values:', values);
        try {
          setLoading(true);
          await axios.post("http://localhost:3001/users", values);
          navigate("/portal/user-list");
        } catch (error) {
          console.log(error);
          alert("Échec de la validation");
          setLoading(false);
        }
      }      
    });

  return (
    <div className='container'>

      <form onSubmit={myFormik.handleSubmit}>
        <div className='row'>
          <div className="col-lg-6">
            <label>Nom</label>
            <input name='username' value={myFormik.values.username} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.username ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.username}</span>
          </div>

          <div className="col-lg-6">
            <label>E-Mail</label>
            <input name='email' value={myFormik.values.email} onChange={myFormik.handleChange} type={"email"}
              className={`form-control ${myFormik.errors.email ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.email}</span>
          </div>

          <div className="col-lg-6">
            <label>Mot de passe</label>
            <input name='password' value={myFormik.values.password} onChange={myFormik.handleChange} type={"password"}
              className={`form-control ${myFormik.errors.password ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.password}</span>
          </div>

          <div className='col-lg-4'>
            <label>Lieu</label>
            <select name='lieu' value={myFormik.values.lieu} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.lieu ? "is-invalid" : ""} `} >
              <option value="">----Choisissez----</option>
              <option value="Djerba">Djerba</option>
              <option value="Hors_djerba">Dehors de Djerba</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.lieu}</span>
          </div>

          <div className='col-lg-4'>
            <label>Ville (DJERBA)</label>
            <select name='ville' value={myFormik.values.ville} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.ville ? "is-invalid" : ""} `} >
              <option value="">----Choisissez----</option>
              <option value="Houmt_Souk">Houmt Souk</option>
              <option value="Midoun">Midoun</option>
              <option value="Ajim">Ajim</option>
              <option value="Guellala">Guellala</option>
              <option value="Erriadh">Erriadh</option>
              <option value="Sedouikech">Sedouikech</option>
              <option value="Aghir">Aghir</option>
              <option value="Mezraya">Mezraya</option>
              <option value="Mellita">Mellita</option>
              <option value="El_Kantara">El Kantara</option>
              <option value="Sfax">Sfax</option>
              <option value="Tunis">Tunis</option>
              <option value="Gabes">Gabes</option>
              <option value="Zarzis">Zarzis</option>
              <option value="Sousse">Sousse</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.ville}</span>
          </div>

          <div className='col-lg-4'>
            <label>Profil</label>
            <select name='profil' value={myFormik.values.profil} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.profil ? "is-invalid" : ""} `} >
              <option value="">----Choisissez----</option>
              <option value="Visiteur">Visiteur(e)</option>
              <option value="Fournisseur">Fournisseur(e)</option>
              <option value="Client">Client(e)</option>
              <option value="Participant">Participant(e)</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.profil}</span>
          </div>

          <div className='col-lg-4 mt-3'>
            <input disabled={isLoading} type="submit" value={isLoading ? "Envoi..." : "Ajouter"} onClickclassName='btn btn-primary' />
          </div>
        </div>
      </form>
      {/* {JSON.stringify(myFormik.values)} */}
    </div>
  );
}

export default UserCreate;
