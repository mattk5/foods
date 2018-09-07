const AllFoods = (props) => {
  // just a reminder that you receive props!
  //  since this is a component that doesn't have state, it can be a const

  var foods = props.foods.map((food) => {
    return(
      <div key={food.id}>
        <Food food={food} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
      </div>
    )
  })

    return(
      <div>
        {foods}
      </div>
  )
}
