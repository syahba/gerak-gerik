import PropTypes from "prop-types";

function Navbar({ isLight }) {
  return (
    <nav
      className={`${
        isLight ? "bg-[var(--white-color)]" : "bg-[var(--primary-color)]"
      } py-2 flex justify-center items-center`}
    >
      <img
        src={isLight ? "/gerak-gerik/logo-dark.webp" : "/gerak-gerik/logo-light.webp"}
        alt="logo"
        className="max-w-14"
      />
    </nav>
  );
}

Navbar.propTypes = {
  isLight: PropTypes.bool,
};

export default Navbar;
