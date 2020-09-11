import React, { Component } from 'react'
import Header from '../../components/Navigation/Header/Header'
import Container from '@material-ui/core/Container'

class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <Header/>
                <main>
                    <Container>
                        { this.props.children }
                    </Container>
                </main>
            </div>
        )
    }
}

export default Layout