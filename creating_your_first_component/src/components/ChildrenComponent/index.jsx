import PropTypes from 'prop-types';

export default function ChildrenComponent({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

ChildrenComponent.propTypes = {
  children: PropTypes.node.isRequired
}