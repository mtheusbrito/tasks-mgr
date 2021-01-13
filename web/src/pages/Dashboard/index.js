// import { Container } from './styles';
import api from '../../services/api';

function Dashboard() {
  api.get('teams');
  return <></>;
}

export default Dashboard;
