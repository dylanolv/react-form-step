import React, { Component } from "react";
import Etape1 from "./Etape1";
import Etape2 from "./Etape2";
import Etape3 from "./Etape3";
import Etape4 from "./Etape4";

class Formulaire extends Component {
    state = {
        etape: 1,
        civilite: "",
        prenom: "",
        nom: "",
        email: "",
        tel: "",
        framework: "",
        autre: ""
    };

    next = () => {
        const { etape } = this.state;
        this.setState({
            etape: etape + 1
        });
    };

    prev = () => {
        const { etape } = this.state;
        this.setState({
            etape: etape - 1
        });
    };

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    };

    render() {
        const { etape } = this.state;
        const {
            civilite,
            prenom,
            nom,
            email,
            tel,
            framework,
            autre
        } = this.state;
        const values = {
            civilite,
            prenom,
            nom,
            email,
            tel,
            framework,
            autre
        };
        switch (etape) {
            case 1:
                return (
                    <Etape1
                        next={this.next}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Etape2
                        next={this.next}
                        prev={this.prev}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Etape3 next={this.next} prev={this.prev} values={values} />
                );
            case 4:
                return <Etape4 />;
            default:
                return false;
        }
    }
}

export default Formulaire;
