class AllFoods extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foods: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/foods.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ foods: data }) });
  }

  render(){
    var foods = this.state.foods.map((food) => {
      return(
        <div key={food.id}>
          <h1>{food.name}</h1>
          <p>{food.description}</p>
        </div>
      )
    })

    return(
      <div>
        {foods}
      </div>
    )
  }
}
