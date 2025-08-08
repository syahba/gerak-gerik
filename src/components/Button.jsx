import PropTypes from "prop-types";

function Button({ isLight, isPrimary, text, onClick }) {
  let styles;

  if (isLight) {
    if (isPrimary) {
      styles = "text-[var(--white-color)] bg-[var(--primary-color)]";
    } else {
      styles = `text-[var(--primary-color)] bg-transparent 
      outline outline-2 outline-[var(--primary-color)] outline-offset-[-1.5px]`;
    }
  } else if (!isLight) {
    if (isPrimary) {
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
  isLight: PropTypes.bool,
  isPrimary: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
