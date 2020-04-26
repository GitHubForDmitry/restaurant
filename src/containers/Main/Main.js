import React from "react";
import { dishes } from "../../static/static";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import "./main.css";
import Plus from "../../assets/images/icons/Plus";

class Main extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    filter: false,
    isModalOpen: false,
    isEndOfThePage: true,
    data: [],
    dishList: [],
    dishImage: "",
    dishName: "",
    dishDescription: "",
    dishType: "",
    kcl: "",
    ingredient: [],
    dataIngredient: [],
    totalKcl: "",
    error: false,
    buttonAddDish: false
  };
  this.handleChangeImage = this.handleChangeImage.bind(this)
  this.openModal= this.openModal.bind(this);
  this.closeModal= this.closeModal.bind(this);
}

  openModal = () => this.setState({isModalOpen: true});
  closeModal = () => this.setState({isModalOpen: false});
  handleChangeImage = (e) => {
    e.preventDefault();
    try {
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({dishImage: reader.result});
      };
      reader.readAsDataURL(file);
    } catch (e) {
      console.log(e.message);
    } finally {
      this.setState({dishImage: ""});
    }
  };

  addIngredientCard = (ingredient, kcl) => {
    if (ingredient && kcl) {
      const todos = [...this.state.dataIngredient];
      todos.push(
          {
            id: (new Date()).getTime(),
            ingredient: ingredient,
            kcl: kcl
          }
      );
      this.setState({ dataIngredient: todos })
      this.setState({totalKcl: this.getTotalKcl(todos)})
    }
  };
  removeIngredient = (id) => {
    this.setState(prevState => ({
      dataIngredient: prevState.dataIngredient.filter(ingredient => ingredient.id !== id),
    }));
  };
  getTotalKcl = (arr) => arr.length !== 0 ? arr.map(item => item.kcl).reduce(((prev, next) => {return +prev+ +next} )) : [];
  addPreparedCard = () => {
    const data = [...this.state.data];
    data.push(
        {
          image: this.state.dishImage,
          name: this.state.dishName,
          description: this.state.dishDescription,
          type: this.state.dishType,
          kcl: this.getTotalKcl(this.state.dataIngredient)
        }
    );
    this.setState({ data })
  };

  componentDidUpdate(prevProps, prevState) {
    if (
        prevState.dishImage !== this.state.dishImage
    ) {
      this.setState({buttonAddDish: true})
    }
  }
  componentDidMount() {
          this.setState({dishList: dishes
                .concat(this.state.data)
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
                ))})
  }
  render() {
    const {
      dishImage,
      dishName,
      dishDescription,
      dishType,
      kcl,
      ingredient,
      dataIngredient,
      totalKcl,
      error,
      buttonAddDish
    } = this.state;
    const {handleChangeImage,
      openModal,
      addIngredientCard,
      removeIngredient,
      getTotalKcl,
      addPreparedCard}  = this;
  return (
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

          <Modal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}>
              <ModalContent closeModal={this.closeModal} data={this.state.data} />
          </Modal>
          <div className="dish-catalogue">
            {this.state.dishList.concat(this.state.data)}
          </div>
        </div>
      </main>
  );
}
}


export default Main;
