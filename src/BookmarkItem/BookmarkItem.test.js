import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkItem from './BookmarkItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookmarkItem title="My test Bookmark" url="https://test.com" rating={4} description="Test bookmark's description to the max."/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
