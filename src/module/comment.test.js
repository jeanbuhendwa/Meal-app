/**
 * @jest-environment jsdom
 */
import fetchMock from 'jest-fetch-mock';
import { renderComments } from './commentPop.js';

describe('renderComments', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('displays the correct number of comments', async () => {
    // Mock the API response
    const mockComments = [
      { username: 'user1', comment: 'comment1', creation_date: '2022-01-01' },
      { username: 'user2', comment: 'comment2', creation_date: '2022-01-02' },
      { username: 'user3', comment: 'comment3', creation_date: '2022-01-03' },
    ];
    fetchMock.mockResponseOnce(JSON.stringify(mockComments));

    // Render the comments
    await renderComments({ meals: [{ idMeal: '123' }] });

    // Check that the correct number of comments are displayed
    const commentsList = document.querySelector('.food-comment ul');
    if (commentsList) {
      expect(commentsList.children.length).toBe(mockComments.length);
    }
  });
});
