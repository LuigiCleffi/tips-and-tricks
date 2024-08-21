import PropTypes from 'prop-types';

// const Button = ({ label, onClick, disabled, color }) => {
//   return   (
//     <button onClick={onClick} disabled={disabled} style={{ backgroundColor: color }}>
//       {label}
//     </button>
//   );
// };


/**
 * 
 *  Instead of manually passing each prop like onClick, disabled, and color,
 *  we can use spread props to pass all other props directly to the button element.
 *  
 * */
 
// eslint-disable-next-line react/prop-types
function Button({ label, ...restProps }){
  return (
    <button {...restProps}>
      {label}
    </button>
  );
};

export {Button};

Button.prototype = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired
}