'use strict';

import React from 'react'
import classNames from 'classnames'
import styles from '../../css/components/footer.css'

export default class Footer extends React.Component {
    render() {
        return (
			<footer className={styles.footer}>
                <p><small>Copyright © digi_tamari All Rights Reserved.</small></p>
            </footer>
        );
    }
}
