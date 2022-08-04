import { useState } from "react"

const Form = (props) => {

    const [toggle, setToggle] = useState(false);

    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLasttName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userPhone, setUserPhone] = useState('');

    const SubmitHandler = (event) => {
        event.preventDefault();
        props.transferSubmit({
            firstName: userFirstName,
            lastName: userLastName,
            age: userAge,
            phone: userPhone
        })
        setToggle(toggle => !toggle);

        setUserFirstName('');
        setUserLasttName('');
        setUserAge('');
        setUserPhone('');
    }


    return(
        <div>
            
            <br/>
            {!toggle &&
            <button onClick = {() => setToggle(toggle => !toggle) }>Show form</button>
            }
            <br/>
          { toggle &&   
         <div style={{display:'grid', placeContent:'center'}}> 
            <h2>Form</h2>    
            <form onSubmit = {SubmitHandler} style={{textAlign:'right'}}>
                <label>First Name: </label>
                <input onChange = {event => setUserFirstName(event.target.value)} value={userFirstName} required/>
                <br/>
                <label>Last Name: </label>
                <input onChange = {event => setUserLasttName(event.target.value)} value={userLastName} required/>
                <br/>
                <label>Age: </label>
                <input onChange = {event => setUserAge(event.target.value)} value={userAge} />
                <br/>
                <label>Phone Number: </label>
                <input onChange = {event => setUserPhone(event.target.value)} value={userPhone} required/>
                <br/>
                <button>Submit</button>
            </form>
            
        </div>
        }
        </div>
    )
}
export default Form