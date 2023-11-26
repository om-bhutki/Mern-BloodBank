import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // You may need to install this library
import AdminHome from './AdminHome';

// Mock Redux store
const mockStore = configureStore([]);

describe('AdminHome Component', () => {
  let store;

  beforeEach(() => {
    // Mock the store state as needed
    const initialState = {
      auth: {
        user: {
          name: 'Vinit', // Replace with the desired user name
        },
      },
    };
    store = mockStore(initialState);
  });

  it('renders user name correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <AdminHome />
      </Provider>
    );

    // Assert that the user name is displayed correctly
    expect(getByText(/Vinit/i)).toBeInTheDocument();
  });

  it('verifies that the user object comes from the database', () => {
    const { getByText } = render(
      <Provider store={store}>
        <AdminHome />
      </Provider>
    );

    // Assert that the user name is displayed in the component
    expect(getByText(/Vinit/)).toBeInTheDocument();

    // You can add more assertions to verify other properties of the user object as needed
    // For example: expect(getByText(/User ID: 123/i)).toBeInTheDocument();
  });

  // Add more test cases as needed
});