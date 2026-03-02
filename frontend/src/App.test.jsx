import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

global.fetch = jest.fn();

describe('App Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders loading state initially', () => {
    fetch.mockImplementation(() => new Promise(() => {})); 
    render(<App />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders student table after successful fetch', async () => {
    const mockStudents = [
      {
        id: 1,
        first_name: 'Altay',
        last_name: 'Hodoglugil',
        check_in_time: '2021-02-15T19:35:00.000Z',
      },
      {
        id: 2,
        first_name: 'Lebron',
        last_name: 'James',
        check_in_time: '2021-02-20T10:15:00.000Z',
      },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockStudents,
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });


    expect(screen.getByText('Altay')).toBeInTheDocument();
    expect(screen.getByText('Hodoglugil')).toBeInTheDocument();
    expect(screen.getByText('Lebron')).toBeInTheDocument();
    expect(screen.getByText('James')).toBeInTheDocument();
  });
});
