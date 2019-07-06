import React, { Component } from 'react';
import cartinhas from './cartinhas.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/action'

// import { Container } from './styles';

class components extends Component {

    componentDidMount() {
        this.props.actions.getUpcoming()
    }

    render() {
        
        return (
        
            <div className="container">
                {this.props.upcoming && this.props.upcoming.map(item => {
                    return (
                        <div className="card mb-4 box-shadow">
                            <div className="card-body">
                                <div className="card-image">
                                    <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                </div>
                                <div className="card-text">
                                    Título: {item.title}<br />
                                    Nota: {item.vote_average}
                                </div>
                            </div>

                        </div>

                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({ upcoming: state.reducer.upcoming });

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ ...actions }, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(components);
