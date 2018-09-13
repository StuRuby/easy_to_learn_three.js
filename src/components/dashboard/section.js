import React, { Component } from 'react';
import Card from './card';
import './dashBoard.css';

export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'cube',
                    url: 'xxx'
                },
                {
                    name: 'cube',
                    url: 'xxx'
                },
                {
                    name: 'cube',
                    url: 'xxx'
                },
                {
                    name: 'cube',
                    url: 'xxx'
                }
            ]
        }
    }

    render() {
        const { data } = this.state;
        if (!Array.isArray(data)) return;
        return (
            <section className='content'>
                <section className='example'>
                    {
                        data.map((item, index) => <Card key={index} propItem={item} />)
                    }
                </section>
            </section>
        )
    }
}