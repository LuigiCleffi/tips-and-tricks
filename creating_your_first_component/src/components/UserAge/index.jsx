import PropTypes from 'prop-types';

export default function UserAge(props) {
  return (
    <h1>Your age is: {props.age}</h1>
  )
}

UserAge.propTypes = {
  age: PropTypes.number.isRequired
};
