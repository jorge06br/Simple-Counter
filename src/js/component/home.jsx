import React from "react";
import ReactDOM from "react-dom";
// create your first component
let counter = 0;
function count() {

    let digit1 = Math.floor(counter) % 10;
    let digit2 = Math.floor(counter / 10) % 10;
    let digit3 = Math.floor(counter / 100) % 10;
    let digit4 = Math.floor(counter / 1000) % 10;
    let digit5 = Math.floor(counter / 10000) % 10;
    let digit6 = Math.floor(counter / 100000) % 10;

    ReactDOM.render (
        <Home first={digit1}
            second={digit2}
            third={digit3}
            fourth={digit4}
            fifth={digit5}
            sixth={digit6}/>,
        document.querySelector("#app")
    );
    counter++;

}
setInterval(count, 1000)


const Home = (props) => {
    return (
        <div>
            <div>
                <h1> {
                    props.sixth
                } </h1>
                <h1> {
                    props.fifth
                } </h1>
                <h1> {
                    props.fourth
                } </h1>
                <h1> {
                    props.third
                } </h1>
                <h1> {
                    props.second
                } </h1>
                <h1> {
                    props.first
                } </h1>
            </div>
            <div>
                <button onClick={
                    () => counter = 0
                }>
                    <i className="fa-solid fa-repeat"></i>
                </button>
            </div>
        </div>


    )
}

export default Home;
