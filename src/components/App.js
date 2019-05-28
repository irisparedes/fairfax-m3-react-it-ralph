import React from 'react';
import Card from './card/Card';
import Home from './home/Home';
import url from './card/defaultImage';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        name:'',
        job:'',
        email:'',
        phone:'',
        linkedin:'',
        github:'',
        palette: 1,
        photo: url
      },
      isAvatarDefault: true,
      collapsible: null
  }
    this.handleInput = this.handleInput.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStorage = this.handleStorage.bind(this);
    this.handleCollapsible = this.handleCollapsible.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  updateAvatar(img) {
    this.setState(prevState => {
      const newCard = {...prevState.card, photo: img};
      return {
        card: newCard,
        isAvatarDefault: false
      }
    });
  }

  handleColor(event) {
    const value = parseInt(event.currentTarget.value);
    this.setState((prevState) => {
      const newPalette = { ...prevState.card, palette: value };
      this.handleStorage(newPalette);
      return ({
        card: newPalette
      });
    });
  }
  handleInput(event) {
    const currentField = event.currentTarget;
    const key = currentField.id;
    const value = currentField.value;
    this.setState((prevState) => {
      // []propiedad dinámica
      const newCard = { ...prevState.card, [key]: value };
      this.handleStorage(newCard);
      return ({
        card: newCard
      });
    });
  }

  handleReset(){
    const defaultCard = {
        name:'',
        job:'',
        email:'',
        phone:'',
        linkedin:'',
        github:'',
        palette: 1,
        photo: url
    }
    this.handleStorage(defaultCard)
    this.setState({
      card: defaultCard, 
      isAvatarDefault: true
    })
  } 

  handleCollapsible(event){
    const newCollapsible = event.currentTarget.id;
    console.log(newCollapsible);
    this.setState(prevState => {
      if(newCollapsible === prevState.collapsible) {
        return {
          collapsible: null
        }
      } else{
        return{
          collapsible: newCollapsible
        }
        }
      });
  }

  handleStorage(data) {
    localStorage.setItem('card', JSON.stringify(data));
  }
  getData() {
    const newData = JSON.parse(localStorage.getItem('card'));
    // console.log(newData);
    if (newData !== null ) {
      this.setState(prevState => {
        return {
          card: newData
        }
      })
    }
  }
  render() {
    const {card, isAvatarDefault} = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Card" render={routerProps => (
            <Card 
              card={card} 
              handleColor={this.handleColor} 
              handleInput={this.handleInput} 
              photo={card.photo}
              isAvatarDefault={isAvatarDefault}
              updateAvatar={this.updateAvatar}
              actionToReset={this.handleReset}
              actionToStore={this.handleStorage}
              openCollapsible={this.handleCollapsible}
              collapsible={this.state.collapsible}
            /> )
          } 
          />
        </Switch>
      </div>
    )
  }
}

export default App;
