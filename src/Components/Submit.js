import React from 'react';

class Submit extends React.Component {
    render() {
        return (
            <div className="login-btn">
                <button className="login-btn__submit" type="submit">{`${this.props.forms}`}</button>
            </div>
        )
    }
}

export default Submit