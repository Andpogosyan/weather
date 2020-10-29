import React from "react";

const Form = (props) => (
    <form className = 'form' onSubmit={props.showWeather}>
    <input type='text' name='city' placeholder='Enter your city'/>
    <button type='submit'>Show Weather</button>
    </form>
)
export default Form;