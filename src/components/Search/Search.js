import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formControls: {
                search: {
                    value: ''
                }
            }
        }
    }

    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }
    
        control.value = event.target.value
        formControls[controlName] = control

        this.setState({
          formControls
        })
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
        this.props.onSearch(this.state.formControls.search.value)
        }
    }
    
    render() {
    let value = this.state.formControls.search.value
    console.log(value);
    if(this.props.value) {
        value = this.props.value
    }
    return (
        <form className="form-search" style={{display: 'flex'}} noValidate autoComplete="off">
        <TextField 
            id="standard-basic" 
            label="Search" 
            onKeyPress={this.handleKeyPress}
            onChange={event => this.onChangeHandler(event, 'search')}
            value={value}
        />
        <Button
            onClick={() => this.props.onSearch(value)}
        >Поиск</Button>
        </form>
    );
    }
}

export default Search