import React, { useState, useContext, useEffect } from 'react';
import { InputContext } from '../App';
import gif from '../assets/lg.gif';
import Meaning from "../components/meaningList";
import ExempleList from '../components/Exemple';
import Synonyme from '../components/synonyme';
import Antonyme from '../components/antonyme';


export default function Result() {
  const [response, setResponse] = useState(null); // Renommé de 'responce' à 'response' pour éviter les fautes
  const [error, setError] = useState(""); // État pour l'erreur
  const [loading, setLoading] = useState(false); // État pour le chargement

  const { inputValue } = useContext(InputContext); // Récupération de la valeur de recherche depuis le contexte

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"; // URL de base

  // Fonction pour récupérer les données de l'API
  const fetchData = async (param) => {
    try {
      setLoading(true); // Début du chargement
      const res = await fetch(`${url}${param}`); // Faire la requête avec le mot passé en paramètre

      if (!res.ok) {
        throw new Error("Une erreur est survenue"); // Lancer une erreur si la réponse n'est pas correcte
      }

      const resultApi = await res.json(); // Conversion de la réponse en JSON
      setResponse(resultApi); // Stockage des données dans l'état

    } catch (e) {
      setError(e.message); // Gestion de l'erreur
    } finally {
      setLoading(false); // Fin du chargement
    }
  };

  // Utilisation de useEffect pour appeler fetchData à chaque changement de inputValue
  useEffect(() => {
    if (inputValue) { // Vérifie que inputValue n'est pas vide avant de faire la requête
      fetchData(inputValue);
    }
  }, [inputValue]); // Le tableau de dépendances contient inputValue pour que fetchData soit appelé chaque fois qu'il change

  if(loading){

    return (
        <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
            <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
            <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
            <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
            <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
            <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
        </div>
    )
    // return <div className='flex justify-center items-center'>
    //     <img  src={gif} alt="" />
    // </div>
  }

  if(error){
    return <h3 className='text-center mt-10 font-semibold text-slate-500'>Aucun mot n'a été trouver😥</h3>
  }
  return (
    <div className='container mx-auto p-4 max-w-2xl'>
     {response && (
         <div>
         <h3 className='text-2xl font-bold mt-4 text-blue-500'>Meaning & definition</h3>
         <Meaning mean = {response} />
         <h3 className='text-2xl font-bold mt-4 text-blue-500'>Exemple :</h3>
         <ExempleList mean = {response} />
         <h3 className='text-2xl font-bold mt-4 text-blue-500'>Synonyme :</h3>
         <Synonyme mean = {response} />
         <h3 className='text-2xl font-bold mt-4 text-blue-500'>Antonyme :</h3>
         <Antonyme mean = {response} />
 
         {/* Affichage des résultats, du chargement et des erreurs */}
      
       </div>
     )}
    </div>
  );
}
