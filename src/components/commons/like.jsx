import React, { Component } from 'react';

class Like extends Component {
    state = { liked: false };

    handleClick = () => {
        const liked = !this.state.liked;
        this.setState({ liked });
    }

    render() {
        return (
            <i
                className={`fa fa-heart${this.state.liked ? '' : '-o'}`}
                aria-hidden="true"
                onClick={this.handleClick}
            ></i>
        );
    }
}

export default Like;
