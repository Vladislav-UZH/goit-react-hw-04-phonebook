import { Message } from './Notification.styled';
import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return <Message>{message ?? 'No contacts with the entered name!'}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
