import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        let {onChangeDropdown} = this.props;
        var val = parseInt(event.target.value);
        onChangeDropdown(val);
    }

    render() {

        const {minVal, maxVal, defaultVal, title, id, incrementFunc} = this.props;
        const options = [];
        for(let k=minVal; k<=maxVal; k = incrementFunc(k)) {
            options.push(
                <option key={k} value={k}>{k}</option>
            );
        }

        return (
            <div className="dropdown">
                <span>{title}:</span>
                <select id={id} onChange={this.onChange} defaultValue={defaultVal}>
                    {options}
                </select>
            </div>
        );
    }
}

Dropdown.defaultProps = {
    minVal: 3,
    maxVal: 25,
    defaultVal: 1000,
    title: 'Dropdown',
    id: '',
    incrementFunc: () => {},
    onChangeDropdown: () => {}
};

Dropdown.propTypes = {
    minVal: PropTypes.number,
    maxVal: PropTypes.number,
    defaultVal: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
    incrementFunc: PropTypes.func,
    onChangeDropdown: PropTypes.func
};

export default Dropdown;
