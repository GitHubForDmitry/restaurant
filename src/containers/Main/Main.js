import React, {useContext, useEffect} from 'react';
import { dishes } from "../../api/API";
import AppContext from "../../context/AppContext";
import Modal from "../../components/Modal";
import ModalContent from "../../components/ModalContent";

function Main(props) {
    const { filter, openModal, isModalOpen, closeModal, data } = useContext(AppContext);
    const allDishes =
        dishes
            .concat(data)
            .filter(dish => dish.name.toLowerCase().includes(filter))
            .map((dish, index) =>
                    <div key={index}>
                        <img src={dish.image} alt={dish.image}/>
                        <p>{dish.description}</p>
                        <p>{dish.name}</p>
                    </div>
                ,);
    useEffect(() => {}, [allDishes, data])
    return (
        <div>
            <button onClick={openModal}>add</button>
            <Modal isModalOpen={isModalOpen} closeModal={closeModal} >
            <ModalContent/>
            </Modal>
            {allDishes}
        </div>
    );
}

export default Main;