import { Component } from 'react';
// import { movies } from '../App';

export class LifecycleClass extends Component {
    constructor(props) {
        super(props); 
        console.log("LifecycleClas -> constructor");

        this.state = {
            counter: 0,
            incrementor: 0
        };
    };

    componentDidMount() {
        console.log("LifecycleClass -> componentDidMount");
    };

    componentWillUnmount() {
        console.log("LifecycleClass -> componentWillUnmount");
    };

    increment = () => { 
        this.setState((state) => ({counter: state.counter + state.incrementor, incrementor: state.incrementor + 1}));

        console.log('increment', this.state.counter);
    };

    render() {
        console.log("LifecycleClass -> render");
        return (<>
            <h2>Lifecycle Class Component</h2>
            <p>Counter value : {this.state.counter}</p>
            <button onClick={this.increment}>
                Increment</button>
        </>)
    };
};
