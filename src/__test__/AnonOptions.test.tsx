import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import AnonOptions from '../components/AnonOptions';

test('renders login and sign-up links', () => {
    render(
      <Router>
        <AnonOptions />
      </Router>
    );

    expect(screen.getByText('login')).toBeTruthy();
    expect(screen.getByText('sign up')).toBeTruthy();
  });
