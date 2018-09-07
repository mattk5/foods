class Body extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      foods: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewFood = this.addNewFood.bind(this)
  }

handleFormSubmit(name, description){
  let body = JSON.stringify({food: {name: name, description: description} })

  fetch('http://localhost:3000/api/v1/foods', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body,
  }).then((response) => {return response.json()}).then((food) => {
    this.addNewFood(food)
  })
}

addNewFood(food){
  this.setState({
    foods: this.state.foods.concat(food)
  })
}

componentDidMount(){
    fetch('/api/v1/foods.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ foods: data }) });
  }
render(){
    return(
      <div>
        <NewFood handleFormSubmit={this.handleFormSubmit} />
        <AllFoods foods={this.state.foods} />
      </div>
    )
  }
}
