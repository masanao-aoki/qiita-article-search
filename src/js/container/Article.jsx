'use strict';

import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import LoadLayer from './LoadLayer'
import { fetchArticle, returnArticleRequest, loadingStateChange } from '../action/action'

import styles from '../../css/components/article.css'


export class Article extends React.Component {

    componentDidMount(){
		this.props.contentRequest(this.props.params.id);
    }

	componentWillUnmount() {
		this.props.init();
		this.props.loadingInit();
	}

	render() {
		const {
			detailContent,
			loadingState,
		} = this.props

		//console.log(this.props)

		return (
			<div>
				{ loadingState &&
					<LoadLayer/>
				}
			<h2 className={styles.articleTitle}>
				{detailContent.title}
			</h2>
			<div className={styles.markdownBody} dangerouslySetInnerHTML={{__html: detailContent.rendered_body}}>
			</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
    return state.article
}

function mapDispatchToProps(dispatch) {
    return {
        init: () => { dispatch(returnArticleRequest('')) },
		loadingInit: () => { dispatch(loadingStateChange(true)) },
        contentRequest: (articleId) => { dispatch(fetchArticle(articleId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
