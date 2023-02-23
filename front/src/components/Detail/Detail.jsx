import styles from "./Detail.module.css"
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail(props) {
    const [infoDet, setInfo] = useState({});

    const {detailId} = useParams();
    console.log("id>", useParams())
    const navigate = useNavigate()

    function backToHome() {
        navigate("/home"); 
    } 
    //MONTAJE y CUANDO CAMBIA ID
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
                console.log(char);
              setInfo(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        
        //desmontaje
        return () => setInfo({});
      }, [detailId]);

    return (
        <div>
            <div><button className={styles.botvolver} onClick={backToHome}>Volver</button></div>
            {infoDet.id ? (
                <div className={styles.contenedor} >
                    <h1 className={styles.nombre} >{"Nombre: " + infoDet.name}</h1>
                    <h5 className={styles.estatus} >{"Estado: " + infoDet.status}</h5>
                    <h5 className={styles.especie} >{"Especie: " +infoDet.species}</h5>
                    <h5 className={styles.gender} >{"Genero: " + infoDet.gender}</h5>
                    <h5 className={styles.origen} >{"Mundo de Origen: " + infoDet.origin?.name}</h5>
                    <div><img className={styles.img} src={infoDet.image} alt={infoDet.name} /></div>
                </div>) : (<h1 className={styles.carga} >loading...</h1>)}
        </div>
    );
}