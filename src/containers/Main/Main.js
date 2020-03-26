import React, { useContext, useEffect, useRef, useState } from "react";
import { dishes } from "../../api/API";
import AppContext from "../../context/AppContext";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import "./main.css";
import Plus from "../../assets/images/icons/Plus";

const Main = () => {
  const { filter, openModal, isModalOpen, closeModal, data } = useContext(
    AppContext
  );

  const [isEndOfThePage, setIsEndOfThePage] = useState(true);
  const [allDishes, setAllDishes] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsEndOfThePage(true);
        setAllDishes(prevState => [...prevState, allDishes]);
      } else setIsEndOfThePage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isEndOfThePage]);

  useEffect(() => {}, [allDishes, data]);

  return (
    <main className="main">
      <div className="container">
        <h1 className="main__title">Meat Dishes</h1>
        <div className="main__add-dish">
          <p className="main__text">
            Some of the best meat dishes from worldwide
          </p>
          <button className="main__add-dish--btn" onClick={openModal}>
            Add a new dish
            <Plus
              styles="main__add-dish--icon"
              fill="#fff"
              width="24px"
              height="24px"
            />
          </button>
        </div>
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
          <ModalContent />
        </Modal>
        <div className="dish-catalogue">
          {dishes
            .concat(data)
            .filter(dish => dish.name.toLowerCase().includes(filter))
            .map((dish, index) => (
              <div className="dish-catalogue__block" key={index}>
                <a className="dish-catalogue--link" href="#">
                  <img
                    className="dish-catalogue--img"
                    src={dish.image}
                    alt={dish.image}
                  />
                  <div className="dish-catalogue--wrapper">
                    <div className="dish-catalogue--type-kcl">
                      <p className="type">{dish.type || "DELICACY"}</p>
                      <p className="kcl">{dish.kcl || 0} kcl</p>
                    </div>

                    <p className="dish-catalogue--name">{dish.name}</p>
                    <p className="dish-catalogue--description">
                      {dish.description}
                    </p>
                    <div className="dish-catalogue--price-persons">
                      <p className="price">
                        {dish.price && <span className="currency">$</span>}
                        {dish.price || "Free"}
                      </p>
                      {dish.persons ? (
                        <p className="persons">
                          For {dish.persons} <br /> persons
                        </p>
                      ) : (
                        <p className="persons">
                          For 1 <br /> person
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
