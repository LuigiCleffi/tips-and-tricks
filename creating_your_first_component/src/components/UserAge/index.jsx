import PropTypes from 'prop-types';

export default function UserAge({ age, ...rest }) {
  return (
    <div>
      <h1>Your age is: {age}</h1>
      {/* Aqui você pode usar `rest` para acessar outras props */}
      {rest.name ? <h1>Your name is: {rest.name}</h1>: null}
    </div>
  );
}

UserAge.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string
};
