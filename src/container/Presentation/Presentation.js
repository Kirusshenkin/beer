import React, {Component} from 'react'
import Container from '@material-ui/core/Container'
import './Presentation.css'
import styled, { keyframes } from 'styled-components';
import { fadeInDownBig } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${fadeInDownBig}`}`;

class Presentation extends Component {
    render() {
        return (
            <div className="presentation">
                <Container>
                    <Bounce>
                        <h2>Welcome to the new prototype</h2>
                    </Bounce>
                </Container>
            </div>
        )
    }
}

export default Presentation