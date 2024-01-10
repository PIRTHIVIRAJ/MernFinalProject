import React, { Component } from 'react';
import './style.css'
class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCar: ''
        };
    }

    handleCarChange = (event) => {
        this.setState({ selectedCar: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission if needed
    };

    render() {
        const { selectedCar } = this.state;
        const selectedClass =
            selectedCar === 'Pending'
                ? 'Pending'
                : selectedCar === 'Completed'
                    ? 'Completed'
                    : 'Processeing';
        return (
            <form onSubmit={this.handleSubmit}>
                <select name="cars" id="cars" value={this.state.selectedCar} onChange={this.handleCarChange}>
                    <option className='Processeing' value="Processeing">Processeing</option>
                    <option className='Pending' value="Pending">Pending</option>
                    <option className='Completed' value="Completed">Completed</option>
                </select>
            </form>
        );
    }
}

export default Dropdown;
