function Button({ is_light = true, is_primary = true, text }) {
  let styles;

  if (is_light) {
    if (is_primary) {
      styles = "text-[var(--white-color)] bg-[var(--primary-color)]";
    } else {
      styles = `text-[var(--primary-color)] bg-transparent 
      outline outline-2 outline-[var(--primary-color)] outline-offset-[-4px]`;
    }
  } else {
    if (is_primary) {
      styles = "text-[var(--primary-color)] bg-[var(--secondary-color)]";
    } else {
      styles = `text-[var(--white-color)] bg-transparent 
      outline outline-2 outline-[var(--white-color)] outline-offset-[-4px]`;
    }
  }

  return (
    <button
      className={`${styles} px-5 py-2 rounded-full hover:scale-110 transition duration-500`}
    >
      <p className="font-bold">Hello</p>
    </button>
  );
}

export default Button;
