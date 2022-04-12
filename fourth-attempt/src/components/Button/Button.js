import PropTypes from "prop-types";
import "./Button.css";
const GenericButton = (props) => {
  return (
    <button className="generic-button" onClick={props.onClick}>
      {props.label}
    </button>
  );
};
GenericButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default GenericButton;
