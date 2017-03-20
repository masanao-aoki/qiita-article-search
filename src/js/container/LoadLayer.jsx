'use strict';
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import styles from '../../css/components/loadlayer.css'

export default class LoadLayer extends React.Component {
	render() {
		const {
			loadingState
		} = this.props

		return (
			<div
				className={styles.searchLayer}
				style={{ display: loadingState ? 'block' : 'none' }}
			></div>
		)
	}
}
