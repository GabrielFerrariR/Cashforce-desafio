import { mount } from '@vue/test-utils';
import matchers from '@testing-library/jest-dom/matchers';
import {describe, it, expect } from 'vitest';
import SideBarVue from '../components/SideBar.vue';

expect.extend(matchers);

describe('Sidebar component', () => {
  it('should have "Notas fiscais" navigation link', () => {
    const wrapper = mount(SideBarVue);
    expect(wrapper.text()).toBe('Notas fiscais');
  });

  it('should have an image with cashsforce logo and alt text "cashforce"', async () => {
    const wrapper = mount(SideBarVue)
    expect(wrapper.find('img').attributes('src')).toBe('src/assets/menu-hero.svg');
    expect(wrapper.find('img').attributes('alt')).toBe('cashforce');
  })

})