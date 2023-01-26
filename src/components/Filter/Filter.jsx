import { Input } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <Input
      onChange={onChange}
      value={value}
      type="text"
      name="filter"
      placeholder="Enter a name to search"
    />
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
