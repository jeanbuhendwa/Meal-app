/**
 * @jest-environment jsdom
 */
import { itemCounter } from './getAllitems.js';

describe('itemCounter', () => {
  let element;
  beforeEach(() => {
    element = document.createElement('div');
    element.textContent = 'Selected items:';
  });
  test('updates the element with the correct item count', () => {
    itemCounter(element, 4);
    expect(element.textContent.trim()).toBe('Selected items: 4');
  });
});
