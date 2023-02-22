import { useSelector } from "react-redux";
import styles from "./favorites.module.css";
import { Link } from "react-router-dom";

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    return (
        <div>
            {
                myFavorites.map((char) => {
                    return (
                        <div className={styles.cardContainer}>
                            <Link to={`/detail/${char.id}`} >
                                <h2 className={styles.nombre}>{char.name}</h2>
                                <h2 className={styles.especie}>{"👾: " + char.species}</h2>
                                <h2 className={styles.genero}> {"🚻: " + char.gender}</h2>
                                <img className={styles.fondo} src={char.image} alt={char.name} />
                            </Link>
                        </div>
                    )
                })
            }
        </div>

    )    
}
export default Favorites;