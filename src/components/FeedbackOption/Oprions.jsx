import stl from './option.module.css';
const Option = ({ options, onLeaveFeedback }) => {
  return (
    <div className={stl.block}>
      {Object.keys(options).map(option => (
        <button
          className={stl.btn}
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default Option;
