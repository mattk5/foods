const NewFood = (props) => {

  let formFields = {}

  return(
    <form onSubmit={ (e) => {
      props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset(); }}>
     <input ref={input => formFields.name = input} placeholder='Enter a name of an item'/>
     <input ref={input => formFields.description = input} placeholder='Enter a description' />
     <button>Submit</button>
    </form>
  )
}
