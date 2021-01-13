/* eslint-disable react/button-has-type */
import { MdNotifications } from 'react-icons/md';
import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color='#42e0f5' size={20} />
      </Badge>
      <Scroll>
        <NotificationList>
          <Notification unread>
            <p>Você foi integrado ao projeto sassub</p>
            <time>há 2 dias </time>
            <button>marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você foi integrado ao projeto sassub</p>
            <time>há 2 dias </time>
            <button>marcar como lida</button>
          </Notification>
        </NotificationList>
      </Scroll>
    </Container>
  );
}

export default Notifications;
