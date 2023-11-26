import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // You may need to install this library

import Header from './Header';

// Mock Redux store
const mockStore = configureStore([]);

describe('Header Component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    // Mock the store state as needed
    const initialState = {
      auth: {
        user: {
          name: 'John Doe',
          role: 'Admin',
        },
      },
    };
    store = mockStore(initialState);

    // Mount the component with necessary context
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
  });

  afterEach(() => {
    // Clean up after each test
    wrapper.unmount();
  });

  it('renders user information correctly', () => {
    // Assert that the user information is displayed correctly
    expect(wrapper.find('p.nav-link').text()).toContain('Welcome John Doe');
    expect(wrapper.find('span.badge').text()).toBe('Admin');
  });

  it('displays logout button', () => {
    // Assert that the logout button is present
    expect(wrapper.find('button.btn-danger').text()).toBe('Logout');
  });

  // Add more test cases as needed
});
