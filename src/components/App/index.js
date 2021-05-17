import {Component} from 'react'
import Balance from '../Balance';


class App extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0,
            transactions: []
        }
        console.log('constructor');

        // this.increment = this.increment.bind(this);

    }

    increment=()=> {
        this.setState((state) => ({
                balance: state.balance + 1,
                transactions: [
                    {
                        label: 'increace',
                        value: 1
                    }, ...state.transactions
                ]
            }
        ))
    }
    increment1=()=> {
        this.setState((state) => ({
                balance: state.balance - 1,
                transactions: [
                    {
                        label: 'increace',
                        value: -1
                    }, ...state.transactions
                ]
            }
        ))
    }



    render() {

        console.log('render');
        return (
            <div>
                <Balance balance={this.state.balance}/>
                <button onClick={this.increment}>add  </button>
                <button onClick={this.increment1}> deadd</button>
                <hr/>
                {this.state.transactions.length === 0 ? 'Не має трансакції ' :
                    JSON.stringify(this.state.transactions)}

            </div>
        )
    }
}

export default App;

