import React from 'react';
import './input.scss';

const Input = ({ label, ...rest }) => {
  return (
    <div className="input-wrapper">
      <p className="label">{label}</p>
      <input
        className="input"
        {...rest}
      />
    </div>
  );
};

// const Input = (props) => {
//   return (
//     <div className="input-wrapper">
//       <p className="label">{props.label}</p>
//       <input
//         className="input"
//         placeholder={props.placeholder}
//       />
//     </div>
//   );
// };

export default Input;
