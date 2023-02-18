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
        <div className={styles.inofrmacion}>
            <div><button onClick={backToHome}>Volver</button></div>
            {infoDet.id ? (
                <div>
                    <h1>{infoDet.name}</h1>
                    <h5>{infoDet.status}</h5>
                    <h5>{infoDet.species}</h5>
                    <h5>{infoDet.gender}</h5>
                    <h5>{infoDet.origin?.name}</h5>
                    <div><img src={infoDet.image} alt={infoDet.name} /></div>
                </div>) : (<h1>loading...</h1>)}
        </div>
    );
}