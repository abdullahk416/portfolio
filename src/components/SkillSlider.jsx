import PropTypes from 'prop-types';
import './ReviewCard.css'; // Add a separate CSS file for styles

const ratings = new Array(5).fill({
  icon: 'star',
  style: { fontVariationSettings: '"FILL" 1' }
});

const ReviewCard = ({ content, imgSrc, name, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">

      <div className="relative overflow-hidden mb-3">
        <div className="stars-container">
          {/* Repeat the ratings twice to create the loop effect */}
          {ratings.map(({ icon, style }, key) => (
            <span
              key={key}
              className="material-symbols-rounded star"
              style={style}
            >
              {icon}
            </span>
          ))}
          {ratings.map(({ icon, style }, key) => (
            <span
              key={`repeat-${key}`}
              className="material-symbols-rounded star"
              style={style}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>

      <p className="text-zinc-400 mb-8">
        {content}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>

        <div>
          <p>{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">
            {company}
          </p>
        </div>
      </div>

    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
};

export default ReviewCard;


