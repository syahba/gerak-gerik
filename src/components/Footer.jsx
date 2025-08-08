import PropTypes from "prop-types";

function Footer({ is_light }) {
  let styles;

  if (is_light) {
    styles = "bg-[var(--white-color)] text-[var(--neutral-color)]"
  } else {
    styles = "bg-[var(--primary-color)] text-[var(--white-color)]"
  }

  return (
    <footer className={`${styles} flex justify-between items-center px-6 py-2 w-full`}>
      <img
        src={is_light ? "./logo-dark.webp" : "./logo-light.webp"}
        alt="logo"
        className="max-w-14"
      />

      <small>Copyright 2025 GerakGerik by Syahba</small>
    </footer>
  );
}

Footer.propTypes = {
  is_light: PropTypes.bool,
};

export default Footer;
