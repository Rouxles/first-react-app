import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

interface HeaderProps {
    title : string
}

export class Header extends React.Component < HeaderProps > {
    render() {
        return (
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Card style={{
                    width: "75vw"
                }}>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Title>Special Title</Card.Title>
                    <Card.Body>
                        <Card.Text>Boring Text</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
