// Dashboard.js
import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import Card from './Card';
import PhotoGallery from './PhotoGallery'; // Adjust the import path as needed
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Colors,
} from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

function Dashboard() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <center><h1 className="h3 mb-0 text-gray-800">Les Nouvelles - <font color='blue'>Zrayeb</font>  Djerba</h1></center>
      </div>

      <div className='slider'>
     <center>   <img width="80%" src='https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/405096725_303689975961662_6827836817145441019_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=zXgnt3pfWfsAX_-PvwG&_nc_ht=scontent.ftun2-2.fna&oh=00_AfCCly5qHj1zp3e83zQ7HolHViT2d3rLaNGDqBYyGi_QkA&oe=657E9328'></img>
     </center> <br></br>
     <p>
     L’événement SSF Forum, qui s’est déroulé du 21 au 23 Novembre au baies de Gocova en Turquie sous le titre « Espèces non autochtones(Invasif), de la santé et de la sécurité aux opportunités de commercialisation» a permit aux représentants des communautés de pêche de plusieurs pays méditerranéens d’échanger et discuter des problématiques dans le sujet notamment :
• Comment minimiser l’impact des NIS.
• Valoriser cet existant qui deviendra ainsi un gain à plusieurs valeurs : création ressources, inhiber l’envahissement de ces espèces et par conséquent stopper la dégradation de l’équilibre écosystème, contribuer à la création d’une ressource alimentaire à travers un enrichissement à la culture alimentaire de la région ou au-delà.
• L’expérience de nos collègues en baie de gocova, concernant la commercialisation du “lion fish”.  Félicitation pour toute leur équipe de travail de scientifiques, pêcheurs et organisations qui ont abouti à de tels résultats convaincantes avec des valeurs ajoutées durables.
• Suite à la présentation et la discussion de cette expérience réussîtes, les première bulles d’idées d’opportunités applicables dans d’autres régions commencent à monter à la surface comme déclarées par les acteurs présents de pêche.
Un grand remerciement à tous les participants, organisations et acteurs qui ont contribué à la réussite de cet événement :
Tous les acteurs de la Turquie(F
Funda KöK, 
Zafer Ali Kisilkaya,
Le Capitain Jonc,
Gisem Akdoğan...),
Les représentants des SSF Mediterranean, 
La GFCM staff représenté par Anna Carlson, Clémentine Laurent, Constance Verlhac, ainsi que la communauté scientifique de recherche (
Zafer tosunoğlu, Petrou Antounis,...) qui ne cessent de rectifier le tir pour atteindre les objectifs généraux de la GFCM concernant les ressources Méditerranéens de poissons.
     </p>

     
     <br></br>  <hr className='hr'></hr> <br></br>
     <center>   <img width="80%" src='https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/376871256_266282156369111_3184511519497935304_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=58ZAOMIysWkAX9gMakV&_nc_ht=scontent.ftun2-2.fna&oh=00_AfBKg-RE_TaE09IogfzDzLpYJAHrbVBRUK_W3E73FuD6Ww&oe=657DC85C'></img>
     </center> <br></br>
     <p>
     Les communautés de pêche à petite échelle, célèbrent aujourd’hui l’anniversaire du Plan d’action régional pour la pêche artisanale en Méditerranée et en mer Noire (RPOA-SSF) !

Un nouveau programme du Forum des pêcheurs artisanaux (Forum SSF) 2023-2024, défini comme résultat d'un exercice consultatif organisé en mars 2023. Des acteurs de la pêche artisanale de 13 pays ont participé aux réflexions pendant deux jours au siège de la FAO à Rome afin de créer un programme pragmatique du Forum SSF 2023-2024 qui reflète les besoins actuels des personnes travaillant dans la pêche artisanale.

Forum SSF | Commission générale des pêches pour la Méditerranée - CGPM | Organisation des Nations Unies pour l’alimentation et l’agriculture (fao.org)
     </p>





     <br></br>  <hr className='hr'></hr> <br></br>
     <center>   <img width="80%" src='https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/373660395_250935081237152_8292979217880277085_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=PBSHZyXQ5JUAX9Fd2Dj&_nc_ht=scontent.ftun2-2.fna&oh=00_AfCkTBLqeeLxEHG--Ekg0yRAOIh_nvYwQ4mWXZLMSB3EPQ&oe=657CFA7C'></img>
     </center> <br></br>
     <p>Les travaux de préparation de la place “centre Mellita” est en voie d'achèvement. Un groupe de citoyens a supervisé les préparatifs du démarrage de la dernière phase du programme « Mellita plus beaux» en termes de décoration de l'installation.
Une petite participation du Groupent Zarayeb Djerba,  et l’Association de Développement  Mellita.</p>

<br></br>  <hr className='hr'></hr> <br></br>
     <center>   <img width="80%" src='https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/369555478_244296261901034_1564176360050321897_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=3KVy-czu8JwAX8FI9ab&_nc_ht=scontent.ftun2-2.fna&oh=00_AfDVS3loU4OkqZrvjxoKwgxgi1go9_MjUuLBxLsAx3_LSQ&oe=657E56D6'></img>
     </center> <br></br>
     <p>Un ensemble de jeunes avec la participation de l’agence APIP, l’association AJEM, et notre groupement, ont exécuté une compagne de lutte contre l’invasion des déchets plastic délaissé dans la mer et stagné dans le port de Houmet Souk Djerba. Une première expérience qui a généré une forte volonté chez les intervenants d’organiser un plan rigoureux pour continuer d’une manière plus efficace, à avancer envers ce type de sujet.</p>
    

     <br></br>  <hr className='hr'></hr> <br></br>
     <center>   <img width="80%" src='https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/363972855_585527963742370_6004833429865195705_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=9KSAjHBvKm0AX9M_gTc&_nc_ht=scontent.ftun2-2.fna&oh=00_AfD3kUJeVwO25qR3t959OakuTRHdWD-_Tzu13RjTcSTHNA&oe=657ECDA2'></img>
     </center> <br></br>
     <p>Une petite participation du groupement aux efforts de protection de la Méditerranée  contre la pollution plastique.  Ceci a été effectué à travers le framework de “Plastic Busters CAP participatory science campaign”
Nous somme ravi de continuer ce type de participation, que nous pensons avoir une valeur ajoutée avec tout les efforts internationaux responsables.</p>
    





     </div>
    </>
  );
}

export default Dashboard;
