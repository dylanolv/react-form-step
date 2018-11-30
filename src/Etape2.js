import React, { Component } from "react";

class Etape2 extends Component {
    next = e => {
        e.preventDefault();
        this.props.next();
    };

    back = e => {
        e.preventDefault();
        this.props.prev();
    };

    render() {
        const { values } = this.props;
        return (
            <form>
                <h1>Etape 2</h1>
                <label>Quel est votre framework préféré ?</label>
                <input
                    type="radio"
                    id="vue"
                    name="radio1"
                    value="Vue"
                    onChange={this.props.handleChange("framework")}
                    selected
                />
                <p htmlFor="vue">Vue</p>
                <input
                    type="radio"
                    id="angular"
                    name="radio1"
                    value="Angular"
                    onChange={this.props.handleChange("framework")}
                />
                <p htmlFor="angular">Angular</p>
                <input
                    type="radio"
                    id="symfony"
                    name="radio1"
                    value="Symfony"
                    onChange={this.props.handleChange("framework")}
                />
                <p htmlFor="symfony">Symfony</p>
                <label>Autre</label>
                <textarea
                    placeholder="Vos frameworks préférés"
                    onChange={this.props.handleChange("autre")}
                    defaultValue={values.autre}
                />
                <button className="myButton" onClick={this.back}>
                    Back
                </button>
                <button className="myButton" onClick={this.next}>
                    Next
                </button>
            </form>
        );
    }
}

export default Etape2;
