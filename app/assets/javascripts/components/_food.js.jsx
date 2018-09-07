class Food extends React.Component{

constructor(props){
  super(props);
  this.state = {
    editable: false
  }
  this.handleEdit = this.handleEdit.bind(this)
}

handleEdit(){
  if(this.state.editable){
    let name = this.name.value
    let description = this.description.value
    let id = this.props.food.id
    let food = {id: id, name: name, description: description}
    this.props.handleUpdate(food)
  }
  this.setState({
    editable: !this.state.editable
  })
}

  render(){
    let name = this.state.editable ?
    <input type='text' ref={input => this.name = input} defaultValue={this.props.food.name}/>:<h3>{this.props.food.name}</h3>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.food.description}/>:<p>{this.props.food.description}</p>

    return(
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit' }</button>
        <button onClick={() => this.props.handleDelete(this.props.food.id)}>Delete</button>
      </div>
    )
  }
}
