import React from 'react';

const Select = (props) => (
  <div className="form-group">
  <label className="select-label">{props.title}</label>
  <select
  name={props.name}
  value={props.selectedOption}
  onChange={props.controlFunc}
  className={props.className}>
  <option value="">{props.placeholder}</option>
  {props.options.map(opt => {
    return (
      <option
      key={opt}
      value={opt}>{opt}</option>
    );
  })}
</select>
</div>
);

// Select.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   options: React.Proptypes.array.isRequired,
//   selectedOption:React.PropTypes.string,
//   controlFunc: React.PropTypes.func.isRequired,
//   placeholder: React.PropTypes.string
// };

export default Select;
