import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

// Mock search function
const mockSearchFunction = jest.fn();

test('live search updates results as the user types', () => {
  render(<SearchBar onSearch={mockSearchFunction} />);

  const input = screen.getByPlaceholderText('Search...');
  fireEvent.change(input, { target: { value: 'example' } });

  // Check if the search function is called with correct input value
  expect(mockSearchFunction).toHaveBeenCalledWith('example');
});
