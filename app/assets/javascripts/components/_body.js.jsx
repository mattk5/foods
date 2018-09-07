class Body extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      foods: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewFood = this.addNewFood.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteFood = this.deleteFood.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateFood = this.updateFood.bind(this)
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

handleDelete(id){
  fetch(`http://localhost:3000/api/v1/foods/${id}`,
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    this.deleteFood(id)
  })
}

handleUpdate(food){
  fetch(`http://localhost:3000/api/v1/foods/${food.id}`,
  {
    method: 'PUT',
    body: JSON.stringify({food: food}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    this.updateFood(food)
  })
}

updateFood(food){
  let newFoods = this.state.foods.filter((f) => f.id !== food.id)
  newFoods.push(food)
  this.setState({
    foods: newFoods
  })
}

addNewFood(food){
  this.setState({
    foods: this.state.foods.concat(food)
  })
}

deleteFood(id){
  newFoods = this.state.foods.filter((food) => food.id !== id)
  this.setState({
    foods: newFoods
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
        <AllFoods foods={this.state.foods} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
      </div>
    )
  }
}
