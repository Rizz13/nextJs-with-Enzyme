import * as React from 'react'
import { expect as expect1 } from 'chai';

import IndexPage from '../pages/index'

import {/*mount,*/ shallow} from 'enzyme' 

const setUp1 = (data) => {
  return shallow(<IndexPage {...data} />);
}
let wrapper;

describe('props Check', () => {

  beforeEach(() => {
      wrapper = setUp1({});
  });

  it('should render an `.icon-stars`', () => {
    expect1(wrapper.find('.icon-stars')).to.have.length(1);
  });

});