import PropTypes from 'prop-types';

export default function UserAge(props) {
  return (
    <div>Your age is: {props.age}</div>
  )
}

UserAge.propTypes = {
  age: PropTypes.number.isRequired
};
