import PropTypes from "prop-types";

function Navbar({ is_light }) {
  return (
    <nav
      className={`${
        is_light ? "bg-[var(--white-color)]" : "bg-[var(--primary-color)]"
      } py-2 flex justify-center items-center`}
    >
      <img
        src={is_light ? "./logo-dark.webp" : "./logo-light.webp"}
        alt="logo"
        className="max-w-14"
      />
    </nav>
  );
}

Navbar.propTypes = {
  is_light: PropTypes.bool,
};

export default Navbar;
