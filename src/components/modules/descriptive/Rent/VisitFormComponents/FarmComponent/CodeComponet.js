import React, { Component } from 'react';
import { baseURl } from '../../../../../../URLS'
import { Select, Form ,Input} from 'antd';
import { mapDispatchToProps, mapStateToProps } from "./reduxMaping"
import { connect } from 'react-redux';

const { Item } = Form;
const axios = require('axios')

class CodeComponent extends Component {
    state = {
        data:null,
    }
    constructor(props) {
        super(props)

    }
    fetchData = (id = "") => {
        debugger
        axios.get(baseURl + "Farm/GetNextSerial/" +id)
            .then((response) => {
                this.setState({ data: response.data })
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    ChangeTriger = (e) => {
        this.props.onChange(e)
    }
    componentDidMount() {
        if (this.props.GovEvents) {
            this.props.GovEvents.FarmCode= this.fetchData
        }
    }
    componentWillUnmount() {
        if (this.props.ChildE) {
            this.props[this.props.parentE][this.props.ChildE] = null
        }
    }
    render() {
        const { data, defValue } = this.state
        return (
           
            <Input type="number" 
            value={data}
            onChange={this.ChangeTriger} />

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeComponent);