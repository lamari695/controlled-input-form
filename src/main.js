export default  function MainP(props) {
const page=(<div>
<form className="Form">
<br></br>
<label>name</label>
<br></br>
<input id='name' type="text" placeholder="Name"></input>
<br></br>
<label>Last name</label>
<br></br>
<input id='last_name' type = 'text' placeholder="last name "></input>
<br></br>
<label>Email address</label>
<br></br>
<input id='email' type="email" minLength={0} maxLength={35} placeholder="Email"></input>
<br></br>
<label>Phone number</label>
<br></br>
<input id='pn' type='number'min={0} max={9} maxLength={11} minLength={11} placeholder="phone number"></input>
<br></br>
<label>address line one </label>
<br></br>
<input id='add1' minLength={1} maxLength={100} type='text '></input>
<br></br>
<label>Addressline two</label>
<br></br>
<input id='add2' minLength={1} maxLength={100} type="text"></input>
<br></br>
<label>Addressline three</label>
<br></br>
<input></input>
<br></br>
<label>post code</label>
<br></br>
<input minLength={5} maxLength={8} type="text" placeholder="Postcode"></input>
<br></br>
<label type='text'maxLength={15} minLength={7} >country</label>
<br></br>
<input></input>
<br></br>

<button onClick={props.next} type="submit">Save & continue</button> 
<br></br>  
</form>
</div>)

return page 
}



export function Secondform(props){
const star =(<div>
<form className="Form">
<br></br>
<label>what motivated you to apply?</label>
<br></br>
<input></input>
<br></br>
<label>what are your expectations for this internship?</label>
<br></br>
<input></input>
<br></br>
<label>what are your strengths?</label>
<br></br>
<input></input>
<br></br>
<label>what are your weaknesses?</label>
<br></br>
<input></input>
<br></br>
<button onChange={props.back} >Previous</button><button onChange={props.next} >Next</button>
</form>

    </div>)
    return star}

export function third(){
<form>
<label>experiences </label>
<input></input>
<label></label>
<input></input>
<label></label>
<input></input>
</form>


}
export function Second(){
    <div>
        <h1>Thank you for submitting the form</h1>
    </div>
}