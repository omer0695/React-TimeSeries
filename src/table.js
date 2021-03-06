const React =  require('react');
import PropTypes from 'prop-types';
import {calculateTimeSeries} from './utils';
// import cones from './../cones';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cones: []
        };
    }
    componentDidMount() {
        fetch('/api/cones')
            .then(response => response.json())
            .then(data => this.setState({ cones: data }));   
    }
    render() {
        if(!this.state.cones.length)
            return null;
        let { riskLevel, initialSum,  monthlySum } = this.props;
        const cone = this.state.cones.filter(cone => cone.riskLevel == riskLevel)[0];
        const fee = 0.01;

        var timeSeries = calculateTimeSeries({
            mu: cone.mu,
            sigma: cone.sigma,
            years: 10,
            initialSum,
            monthlySum,
            fee
        });

        const months = timeSeries.median.map((v, idx) => idx);
        var dataGood = timeSeries.upper95.map(v => v.y);
        let dataMedian = timeSeries.median.map(v => v.y);
        const dataBad = timeSeries.lower05.map(v => v.y);

        const rows = months.map((entry, idx) => (
            <tr key={idx}>
                <td>{entry}</td>
                <td>{dataGood[idx]}</td>
                <td>{dataMedian[idx]}</td>
                <td>{dataBad[idx]}</td>
            </tr>
        ));

        var tableHeader = React.createElement('tr', {}, [
            React.createElement('th', {key: 'month'}, 'month'),
            React.createElement('th', {key: 'good'}, 'good'),
            React.createElement('th', {key: 'median'}, 'median'),
            React.createElement('th', {key: 'bad'}, 'bad')
        ]);

        return (
            <table>
                <thead>
                    {tableHeader}
                </thead>
                <tbody>
                   {rows}
                </tbody>
            </table>
        );
    }

}

Table.defaultProps = {
    riskLevel: 10,
    initialSum: 1000,
    monthlySum: 200
};

Table.propTypes = {
    riskLevel: PropTypes.number,
    initialSum: PropTypes.number,
    monthlySum: PropTypes.number
};

export default Table;
