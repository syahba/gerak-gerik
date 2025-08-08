import PropTypes from "prop-types";

function Footer({ isLight }) {
  let styles;

  if (isLight) {
    styles = "bg-[var(--white-color)] text-[var(--neutral-color)]"
  } else {
    styles = "bg-[var(--primary-color)] text-[var(--white-color)]"
  }

  return (
    <footer className={`${styles} flex justify-between items-center px-6 py-2 w-full`}>
      <img
        src={isLight ? "./logo-dark.webp" : "./logo-light.webp"}
        alt="logo"
        className="max-w-14"
      />

      <small>Copyright 2025 GerakGerik by Syahba</small>
    </footer>
  );
}

Footer.propTypes = {
  isLight: PropTypes.bool,
};

export default Footer;
