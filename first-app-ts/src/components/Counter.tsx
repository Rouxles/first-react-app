import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

interface ComponentProps {
    count : number
}

const getInitialCount = (props : ComponentProps) => props.count

export class Counter extends React.Component < ComponentProps > {
    readonly state = {
        count: getInitialCount(this.props)
    }

    up = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    down = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <Button variant="primary" onClick={this.up}>Increment</Button>{' '}
                <Button variant="primary" onClick={this.down}>Decrement</Button>
            </div>
        )
    }
}