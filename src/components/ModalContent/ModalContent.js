import React from "react";
import "./modal-content.css";
import Camera from "../../assets/images/icons/Camera";
import Chevron from "../../assets/images/icons/Chevron";
import Plus from "../../assets/images/icons/Plus";
import Menu from "../../assets/images/icons/Menu";
import Trash from "../../assets/images/icons/Trash";

class AddDish {
  constructor(dishImage, dishName, dishDescription, dishType) {
    this.image = dishImage;
    this.name = dishName;
    this.description = dishDescription;
    this.type = dishType;
  }

  addPreparedCard = (data) => {
    data.push({
      image: this.image,
      name: this.name,
      description: this.description,
      type: this.type ,
    });
  };
}

class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dishImage: "",
      dishName: "",
      dishDescription: "",
      dishType: "",
      kcl: "",
      ingredient: "",
      dataIngredient: [],
      totalKcl: [],
      error: false,
      buttonAddDish: false,
    };
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeIngredient = this.handleChangeIngredient.bind(this);
  }
  handleChangeImage = (e) => {
    e.preventDefault();
    try {
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({ dishImage: reader.result });
      };
      reader.readAsDataURL(file);
    } catch (e) {
      console.log(e.message);
    } finally {
      this.setState({ dishImage: "" });
    }
  };

  handleChangeIngredient = (e) => {
    this.setState({ ingredient: e.target.value });
  };
  addIngredientCard = (ingredient, kcl) => {
    if (ingredient && kcl) {
      const todos = [...this.state.dataIngredient];
      todos.push({
        id: new Date().getTime(),
        ingredient: ingredient,
        kcl: kcl,
      });
      this.setState({ dataIngredient: todos });
      this.setState({ totalKcl: this.getTotalKcl(todos) });
    }
  };
  removeIngredient = (id) => {
    this.setState((prevState) => ({
      dataIngredient: prevState.dataIngredient.filter(
        (ingredient) => ingredient.id !== id
      ),
    }));
  };

  getTotalKcl = (arr) =>
    arr.length !== 0
      ? arr
          .map((item) => item.kcl)
          .reduce((prev, next) => {
            return +prev + +next;
          })
      : [];

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dishImage !== this.state.dishImage) {
      this.setState({ buttonAddDish: true });
    }
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
      buttonAddDish,
    } = this.state;
    const { closeModal } = this.props;

    let newDish = new AddDish(dishImage,
        dishName,
        dishDescription,
        dishType)
    return (
      <div className="dish">
        <div
          className="dish__image"
          style={{ backgroundImage: `url(${dishImage})` }}
        >
          <div className={dishImage ? "dish__shadow" : ""}>
            <div className="dish__container">
              <h1
                style={dishImage ? { color: "#fff" } : { color: "#000" }}
                className="dish__title"
              >
                {dishName !== "" ? dishName : "Add a new dish"}
              </h1>
              <p
                style={dishImage ? { color: "#fff" } : { color: "#000" }}
                className="dish__info"
              >
                {dishDescription !== ""
                  ? dishDescription
                  : "Please enter all informations about your new dish"}
              </p>
              <label
                style={dishImage ? { color: "#fff" } : { color: "#000" }}
                className="dish__add-photo"
                htmlFor="imageButton"
              >
                {dishImage !== "" ? "Change photo" : "Add a photo"}
                <input
                  type="file"
                  onChange={this.handleChangeImage}
                  id="imageButton"
                  style={{ display: "none" }}
                />
                <Camera
                  fill={dishImage ? "#fff" : "#000"}
                  width="24px"
                  height="20px"
                  styles="dish__camera"
                />
              </label>
            </div>
          </div>
          <div className="dish__form">
            <div className="dish__container">
              <label htmlFor="dish" className="dish__name">
                <input
                  type="text"
                  placeholder="Dish name"
                  id="dish"
                  value={dishName}
                  onChange={(text) =>
                    this.setState({ dishName: text.target.value })
                  }
                  maxLength={50}
                />
                <span className="dish__name--max">
                  Max. {50 - dishName.length} Characters
                </span>
              </label>
              <label htmlFor="dishSelect" className="dish__select">
                <select
                  name="dishSelect"
                  id="dishSelect"
                  value={dishType}
                  onChange={(text) =>
                    this.setState({ dishType: text.target.value })
                  }
                  className="dish__select--main"
                >
                  <option className="dish__select--option-category" value="">
                    Select a dish category
                  </option>
                  <option className="dish__select--option" value="Meat">
                    Meat
                  </option>
                  <option className="dish__select--option" value="Vegetables">
                    Vegetables
                  </option>
                  <option className="dish__select--option" value="Drinks">
                    Drinks
                  </option>
                </select>
                <Chevron
                  fill="#000"
                  width="24px"
                  height="18px"
                  styles="dish__select--chevron"
                />
              </label>
              <label htmlFor="areaDish" className="dish__textarea">
                <textarea
                  name="areaDish"
                  id="areaDish"
                  placeholder="Dish description"
                  value={dishDescription}
                  onChange={(text) =>
                    this.setState({ dishDescription: text.target.value })
                  }
                  maxLength={150}
                />
                <span className="dish__textarea--max">
                  Max. {150 - dishDescription.length} Characters
                </span>
              </label>
              <div className="ingredients">
                <div className="ingredients__add">
                  <p className="ingredients--text">Ingredients</p>
                  <button
                    className="ingredients--btn"
                    onClick={() => {
                      if (kcl && ingredient) {
                        return this.addIngredientCard(ingredient, kcl);
                      } else {
                        this.setState({ error: true });
                        setTimeout(() => {
                          this.setState({ error: false });
                        }, 2000);
                      }
                    }}
                  >
                    Add new ingredient{" "}
                    <Plus
                      styles="ingredients--btn--plus"
                      fill="#FFB53A"
                      width="20px"
                      height="20px"
                    />
                  </button>
                </div>
                <div className="ingredients__prepare">
                  <label
                    className="ingredients__prepare--ingredient-name"
                    htmlFor="ingredient"
                  >
                    <Menu
                      fill="#000"
                      width="30px"
                      height="30px"
                      styles="ingredients--menu"
                    />
                    <input
                      type="text"
                      placeholder="Ingredient name"
                      id="ingredient"
                      value={ingredient}
                      onChange={(text) =>
                        this.setState({ ingredient: text.target.value })
                      }
                    />
                    <Plus
                      styles="ingredients__prepare--plus"
                      fill="#000"
                      width="20px"
                      height="20px"
                    />
                  </label>
                  <label
                    style={kcl ? { width: 143 } : { width: 109 }}
                    className="ingredients__prepare--kcl"
                    htmlFor="kcl"
                  >
                    <input
                      type="number"
                      placeholder="Weight (Kcl)"
                      id="kcl"
                      value={kcl}
                      onChange={(text) =>
                        this.setState({ kcl: text.target.value })
                      }
                    />
                    <button
                      className="ingredients__prepare--trash-btn"
                      onClick={() => {
                        this.setState({ kcl: "", ingredient: "" });
                      }}
                    >
                      {kcl && (
                        <Trash
                          styles="ingredients__prepare--trash"
                          fill="#000"
                          width="25px"
                          height="28px"
                        />
                      )}
                    </button>
                  </label>
                </div>
                <p className="ingredients__prepare--error">
                  {error ? "fields must not be empty" : ""}
                </p>
              </div>
              {!!dataIngredient.length && (
                <div className="ingredients--text">
                  There{" "}
                  {dataIngredient.length === 1
                    ? `is ${dataIngredient.length} ingredient`
                    : `are ${dataIngredient.length} ingredients`}{" "}
                </div>
              )}
              <div className="ingredients__result">
                {dataIngredient &&
                  dataIngredient.map((ingredient, index) => (
                    <div key={index} className="ingredients__prepare">
                      <label
                        className="ingredients__prepare--ingredient-name"
                        htmlFor="ingredient"
                      >
                        <div className="ingredients--list-number">
                          {index + 1}
                        </div>
                        <p className="ingredients__prepare--text">
                          {ingredient.ingredient}
                        </p>
                        <Plus
                          styles="ingredients__prepare--plus"
                          fill="#000"
                          width="20px"
                          height="20px"
                        />
                      </label>
                      <label
                        style={kcl ? { width: 143 } : { width: 109 }}
                        className="ingredients__prepare--kcl"
                        htmlFor="kcl"
                      >
                        <p className="ingredients__prepare--kcl-text">
                          {ingredient.kcl}
                        </p>
                        <button
                          className="ingredients__prepare--trash-btn"
                          onClick={() => this.removeIngredient(ingredient.id)}
                        >
                          <Trash
                            styles="ingredients__prepare--trash"
                            fill="#000"
                            width="25px"
                            height="28px"
                          />
                        </button>
                      </label>
                    </div>
                  ))}
                {!!dataIngredient.length && (
                  <div className="total-ingredients">
                    <p className="total-ingredients--text">
                      <span className="total-ingredients--bold">
                        {dataIngredient.length} Ingredients
                      </span>{" "}
                      in your dish
                    </p>
                    <p className="total-ingredients--text">
                      Total weight :{" "}
                      <span className="total-ingredients--bold">
                        {totalKcl}
                      </span>{" "}
                      Kcl
                    </p>
                  </div>
                )}
              </div>
              {buttonAddDish && (
                <button
                  onClick={() => {
                    newDish.addPreparedCard(this.props.context);
                    closeModal();
                  }}
                  className="add-dish-btn-bottom"
                >
                  {" "}
                  Add this dish to my menu {totalKcl || 0} Kcl
                  <Plus
                    styles="ingredients__prepare--plus-bottom"
                    fill="#fff"
                    width="20px"
                    height="20px"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalContent;
