import React, { Component } from "react";
import axios from "axios";

class Etape3 extends Component {
    createUser = e => {
        e.preventDefault();
        const {
            values: { civilite, prenom, nom, email, tel, framework, autre }
        } = this.props;

        axios
            .post("http://localhost:4000/users", {
                civilite,
                prenom,
                nom,
                email,
                tel,
                framework,
                autre
            })
            .then(result => {
                this.props.next();
            });
    };

    back = e => {
        e.preventDefault();
        this.props.prev();
    };

    render() {
        const {
            values: { civilite, prenom, nom, email, tel, framework, autre }
        } = this.props;

        return (
            <div id="Etape3">
                <h1>Etape 3</h1>
                <ul>
                    <li>
                        <p>
                            Civilite : <b>{civilite}</b>
                        </p>
                    </li>
                    <li>
                        <p>
                            Prenom : <b>{prenom}</b>
                        </p>
                    </li>
                    <li>
                        <p>
                            Nom : <b>{nom}</b>
                        </p>
                    </li>
                    <li>
                        <p>
                            Email : <b>{email}</b>
                        </p>
                    </li>
                    <li>
                        <p>
                            Telephone : <b>{tel}</b>
                        </p>
                    </li>
                    <li>
                        <p>
                            Framework : <b>{framework}</b>
                        </p>
                    </li>
                    <li>
                        <p>
                            Autre : <b>{autre}</b>
                        </p>
                    </li>
                </ul>

                <button className="myButton" onClick={this.back}>
                    Back
                </button>
                <button className="myButton" onClick={this.createUser}>
                    Next
                </button>
            </div>
        );
    }
}

export default Etape3;
