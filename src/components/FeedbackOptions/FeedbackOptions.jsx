import './FeedbackOptions.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button className='button' type="button" key={option} onClick={() =>onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);



FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions;