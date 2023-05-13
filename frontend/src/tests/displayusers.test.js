import { render, screen, waitFor } from '@testing-library/react';
import DisplayUsers from '../components/Admin/AdminSlidebarActions';


test('renders DisplayUsers component without crashing', () => {
  render(<DisplayUsers />);
});
