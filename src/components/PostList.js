import React, { Component } from 'react'
import ReactTable from "react-table";
import 'react-table/react-table.css';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            records: [],
            columns: [
                {
                    Header: 'Title',
                    accessor: 'title' // String-based value accessors!
                }, {
                    Header: 'Body',
                    accessor: 'body',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }
            ]
        }
    }

    componentWillMount() {
        fetch(this.props.dataUrl)
            .then(res => res.json())
            .then(data => this.setState({records: data}))            
    }

    render() {
        return (
            <ReactTable
            data={this.state.records}
            columns={this.state.columns}
            />
        )
    }
}

export default List;