import React from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ContactPage.css';

class ContactPage extends React.Component {

    state = {
        value: "",
        isEmpty: true
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: ""
        });
    }

    handleChange = (e) => {
        if(e.target.value.length > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: false
            });
        } else {
            this.setState({
                value: e.target.value,
                isEmpty: true
            });
        }
    }

    render() {
        return (
            <div className="contact">
                <form>
                    <h3>Napisz do nas!</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość"></textarea>
                    <button onClick={this.handleSubmit}>Wyślij</button>
                </form>

                <Prompt
                    when={!this.state.isEmpty}
                    message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić tą stronę?"
                />
            </div>
        );
    }
}
export default ContactPage;