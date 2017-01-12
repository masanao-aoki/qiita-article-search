'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { ajaxArticleRequest, returnArticleRequest } from '../action/action'

import styles from '../../css/components/list.css'


export class Article extends React.Component {

    componentWillMount(){
        this.props.init();
    }

    componentDidMount(){
        this.props.contentRequest(this.props.params.id);
    }


    render() {
        return (
            <div>
            <h2 className="article-item-title">
                {this.props.detailContent.title}
            </h2>
            <div className="markdownHelp_body" dangerouslySetInnerHTML={{__html: this.props.detailContent.rendered_body}}>
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
        contentRequest: (articleId) => { dispatch(ajaxArticleRequest(articleId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
