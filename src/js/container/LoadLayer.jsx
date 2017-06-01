'use strict';
import React from 'react'
import { connect } from 'react-redux'

import styles from '../../css/components/loadlayer.css'

export default class LoadLayer extends React.Component {
	render() {
		return (
			<div
				className={styles.searchLayer}
			></div>
		)
	}
}
