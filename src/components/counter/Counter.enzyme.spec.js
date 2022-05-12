import React from 'react';
import { shallow } from 'enzyme';

import Counter from './Counter.component';

describe('<Counter />', () => {
  it('should set the passed initialCount to state', () => {
    const wrapper = shallow(<Counter initialCount={2} />);
    expect(wrapper.instance().state.count).toBe(2);
  });

  it('should increment by 1 when increment function is called', () => {
    const wrapper = shallow(<Counter />);
    const instance = wrapper.instance();
    expect(instance.state.count).toBe(0);
    instance.increment();
    expect(instance.state.count).toBe(1);
  });

  it('should increment by 1 when increment button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const instance = wrapper.instance();
    expect(instance.state.count).toBe(0);
    wrapper.find('button.increment').simulate('click');
    expect(instance.state.count).toBe(1);
  });
});
