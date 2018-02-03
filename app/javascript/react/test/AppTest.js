import { App } from '../src/containers/App';
// import shallowWithStore from './shallowWithStore';
import React from 'react';
// import { createMockStore } from 'redux-test-utils';
import configureStore from 'redux-mock-store';

import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('A test for App', () => {
	const initialState = { id: null };
	const mockStore = configureStore();
	let wrapper;
	let store;

	beforeEach(() => {
		store = mockStore(initialState);
		wrapper = shallow(<App store={store} />);
	});

	it('should pass', () => {
		// expect(wrapper.props().store).to.be(store);
		expect(true).toEqual(true);
	});
});
