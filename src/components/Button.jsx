import PropTypes from "prop-types";

function Button({ is_light, is_primary, text, onClick }) {
  let styles;

  if (is_light) {
    if (is_primary) {
      styles = "text-[var(--white-color)] bg-[var(--primary-color)]";
    } else {
      styles = `text-[var(--primary-color)] bg-transparent 
      outline outline-2 outline-[var(--primary-color)] outline-offset-[-1.5px]`;
    }
  } else if (!is_light) {
    if (is_primary) {
      styles = "text-[var(--primary-color)] bg-[var(--secondary-color)]";
    } else {
      styles = `text-[var(--white-color)] bg-transparent 
      outline outline-2 outline-[var(--white-color)] outline-offset-[-1.5px]`;
    }
  }

  return (
    <button
      className={`${styles} px-5 py-1.5 rounded-full 
      hover:scale-105 transition duration-500`}
      onClick={onClick}
      type="button"
    >
      <p className="font-bold">{text}</p>
    </button>
  );
}

Button.propTypes = {
  is_light: PropTypes.bool,
  is_primary: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
