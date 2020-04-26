import React from "react";
import { dishes } from "../../static/static";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import "./main.css";
import Plus from "../../assets/images/icons/Plus";

const MyContext = React.createContext();

class MainProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainData: [],
    };
  }
  render() {
    return (
      <MyContext.Provider value={this.state.mainData}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dishImage !== this.state.dishImage) {
      this.setState({ buttonAddDish: true });
    }
  }
  getLisDishes = (arr) =>
    arr.map((dish, index) => (
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
            <p className="dish-catalogue--description">{dish.description}</p>
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
    ));
  componentDidMount() {
    this.setState({ dishList: this.getLisDishes(dishes) });
  }
  render() {
    return (
      <MainProvider>
        <main className="main">
          <div className="container">
            <h1 className="main__title">Meat Dishes</h1>
            <div className="main__add-dish">
              <p className="main__text">
                Some of the best meat dishes from worldwide
              </p>
              <button className="main__add-dish--btn" onClick={this.openModal}>
                Add a new dish
                <Plus
                  styles="main__add-dish--icon"
                  fill="#fff"
                  width="24px"
                  height="24px"
                />
              </button>
            </div>
            <MyContext.Consumer>
              {(context) => {
                console.log(context);
                return (
                  <>
                    <Modal
                      isModalOpen={this.state.isModalOpen}
                      closeModal={this.closeModal}
                    >
                      <ModalContent
                        closeModal={this.closeModal}
                        context={context}
                      />
                    </Modal>
                    <div className="dish-catalogue">
                      {this.state.dishList}
                      {this.getLisDishes(context)}
                    </div>
                  </>
                );
              }}
            </MyContext.Consumer>
          </div>
        </main>
      </MainProvider>
    );
  }
}

export default Main;
