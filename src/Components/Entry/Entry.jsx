import React, { Component } from 'react';
import Weather from './Weather'
import { Card } from 'rbx'
class Entry extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>
                        <Card.Header.Title>Current Location</Card.Header.Title>
                    </Card.Header>
                    {/* <Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" /> */}
                    <Card.Content>
                        <Weather>

                        </Weather>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default Entry;