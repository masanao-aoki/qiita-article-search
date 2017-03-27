'use strict';

import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Header from '../presentational/header'
import Footer from '../presentational/footer'

import layout from '../../css/components/layout.css'

export class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <main className={layout.lMain}>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
