import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './menu';
import Dropdown from './Dropdown'
import Table from './table';
import Chart from './chart';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            riskLevel: 10,
            initialSum: 1000,
            monthlySum: 200        
        };
        // using generic onChangeDropdown for all
        this.onChangeDropdown = this.onChangeDropdown.bind(this);
    }

    onChangeDropdown() {
        this.setState({ [event.target.id]: parseInt(event.target.value) });
    }

    render() {
        const {riskLevel, initialSum, monthlySum} = this.state;
        return (
            <Router>
                <div className="scalableApp">
                    <Menu/>
                <div className="dropdownGroup">    
                    <Dropdown id= "riskLevel" title={'Risk level'} onChangeDropdown={this.onChangeDropdown} minVal={3} maxVal={25}
                     defaultVal={10} incrementFunc = {(n) =>  ++n } />
                    <Dropdown id= "initialSum" title={'Initial sum'} onChangeDropdown={this.onChangeDropdown} minVal={1000} maxVal={20000}
                     defaultVal={1000} incrementFunc = {(n) =>  n + 1000 } /> 
                     <Dropdown id= "monthlySum" title={'Monthly sum'} onChangeDropdown={this.onChangeDropdown} minVal={200} maxVal={2000}
                     defaultVal={200} incrementFunc = {(n) =>  n + 200 } /> 
                </div>
                    <Route exact path="/" component={() => <Table riskLevel={riskLevel} initialSum={initialSum} monthlySum={monthlySum} />} />
                    <Route path="/table" component={() => <Table riskLevel={riskLevel} initialSum={initialSum} monthlySum={monthlySum} />} />
                    <Route path="/chart" component={() => <Chart riskLevel={riskLevel} initialSum={initialSum} monthlySum={monthlySum} />} />
                    <div className="clear"></div>
                </div>
            </Router>
        );
    }

}
