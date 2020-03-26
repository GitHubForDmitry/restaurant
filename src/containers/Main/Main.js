import React, {useContext, useEffect} from 'react';
import { dishes } from "../../api/API";
import AppContext from "../../context/AppContext";
import Modal from "../../components/Modal";
import ModalContent from "../../components/ModalContent";
import './main.css';

function Main(props) {
    const { filter, openModal, isModalOpen, closeModal, data } = useContext(AppContext);
    const allDishes =
        dishes
            .concat(data)
            .filter(dish => dish.name.toLowerCase().includes(filter))
            .map((dish, index) =>
                    <div className="dish-catalogue__block" key={index}>
                        <a className="dish-catalogue--link" href="#">

                        <img className="dish-catalogue--img" src={dish.image} alt={dish.image}/>
                        <p className="dish-catalogue--description">{dish.description}</p>
                        <p className="dish-catalogue--name">{dish.name}</p>
                        </a>
                    </div>
                ,);
    useEffect(() => {}, [allDishes, data])
    return (
        <main className="main">
            <div className="container">
                <h1 className="main__title">Meat Dishes</h1>
                <p className="main__text">Some of the best meat dishes from worldwide</p>
                <button onClick={openModal}>Add a new dish</button>
                <Modal isModalOpen={isModalOpen} closeModal={closeModal} >
                    <ModalContent/>
                </Modal>
                <div className="dish-catalogue">
                    {allDishes}
                </div>
            </div>
        </main>
    );
}

export default Main;