import { useSelector, useDispatch } from "react-redux";
import styles from "./favorites.module.css";
import { Link } from "react-router-dom";
import {orderCards, filterCards} from "../../redux/actions";

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    const dispatch = useDispatch();

    const handlerOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>

            <div>
                <select onChange={handlerOrder}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>

                <select onChange={handlerFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>

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