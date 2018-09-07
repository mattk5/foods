class Food extends React.Component{

  render(){
    return(
      <div>
        <h1>{this.props.food.name}</h1>
        <p>{this.props.food.description}</p>
      </div>
    )
  }
}
