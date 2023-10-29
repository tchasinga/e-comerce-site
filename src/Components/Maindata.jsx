// No need to import React since it's not used in this file
import PropTypes from 'prop-types';

const Maindata = ({ market }) => {
  return (
    <div>
      <img src={market.img} alt={market.title} />
      <p>{market.title}</p>
    </div>
  );
};

Maindata.propTypes = {
  market: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Maindata;
