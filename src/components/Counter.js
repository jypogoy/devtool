import React from 'react';
import { connect } from 'react-redux';

 function Counter(props) {
    return (
        <div>
            <h1>I am a counter!</h1>
            <p>Counter: {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: () => {
            const action = { type: 'INCREMENT' };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);