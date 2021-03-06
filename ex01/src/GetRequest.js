import React from 'react';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { totalReactPackages: null };
    }

    componentDidMount() {
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }

    render() {
        const { totalReactPackages } = this.state;

        return (
            <div className="card text-ceter m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">Total packages:{totalReactPackages}</div>
            </div>
        );
    }

}

export default GetRequest;