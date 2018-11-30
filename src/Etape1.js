import React, { Component } from "react";

class Etape1 extends Component {
    next = e => {
        e.preventDefault();
        this.props.next();
    };

    render() {
        const { values } = this.props;
        const {
            values: { civilite, prenom, nom, email }
        } = this.props;
        const isEnabled =
            civilite.length > 0 &&
            prenom.length > 0 &&
            nom.length > 0 &&
            email.length > 0;
        return (
            <form>
                <h1>Etape 1</h1>
                <label>* Civilité</label>
                <select
                    name="civilite"
                    onChange={this.props.handleChange("civilite")}
                    defaultValue={values.civilite}
                >
                    <option value="">--Choisir une option--</option>
                    <option defaultValue={values.civilite}>Mr</option>
                    <option defaultValue={values.civilite}>Mme</option>
                </select>
                <label>* Prénom</label>
                <input
                    placeholder="Prénom"
                    onChange={this.props.handleChange("prenom")}
                    defaultValue={values.prenom}
                />
                <label>* Nom</label>
                <input
                    placeholder="Nom"
                    onChange={this.props.handleChange("nom")}
                    defaultValue={values.nom}
                />
                <label>* Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={this.props.handleChange("email")}
                    defaultValue={values.email}
                />
                <label>Téléphone</label>
                <input
                    type="tel"
                    pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                    placeholder="+33 _ __ __ __ __"
                    onChange={this.props.handleChange("tel")}
                    defaultValue={values.tel}
                />
                <button
                    className="myButton"
                    disabled={!isEnabled}
                    onClick={this.next}
                >
                    Next
                </button>
            </form>
        );
    }
}

export default Etape1;
