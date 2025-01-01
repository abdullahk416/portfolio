import PropTypes from 'prop-types';

/**
 * Primary Button
 */

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes,
  onClick // Add the onClick prop
}) => {
  // If the `href` is passed, render an anchor link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-primary " + classes}
      >
        {label}

        {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    );
  } else {
    // If `onClick` is passed, render a button with the onClick event
    return (
      <button
        className={"btn btn-primary " + classes}
        onClick={onClick} // Attach the onClick event
      >
        {label}

        {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func // Add prop type for onClick
};

/**
 * Outline Button
 */

const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline " + classes}
      >
        {label}

        {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}

        {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};

export {
  ButtonPrimary,
  ButtonOutline
};
