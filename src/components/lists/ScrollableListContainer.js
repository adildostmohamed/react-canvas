import React, { Component } from 'react';

import ScrollableList from 'components/lists/ScrollableList';

export default class ScrollableListContainer extends Component {
  render() {
    const listData = {
      title: 'Title of this list',
      items: [
        {
          name: 'Item 1',
          desc: 'This is the description for the first list item',
          link: 'https://www.google.com'
        },
        {
          name: 'Item 2',
          desc: 'This is the description for the second list item',
          link: 'https://www.google.com'
        },
        {
          name: 'Item 3',
          desc: 'This is the description for the fourth list item',
          link: 'https://www.google.com'
        },
        {
          name: 'Item 4',
        },
        {
          name: 'Item 5',
          desc: 'This is the description for the list item',
        },
        {
          name: 'Item 6',
          link: 'https://www.google.com'
        },
        {
          name: 'Item 1',
          desc: 'This is the description for the first list item',
          link: 'https://www.google.com'
        },
        {
          name: 'Item 2',
          desc: 'This is the description for the second list item',
          link: 'https://www.google.com'
        },
        {
          name: 'Item 3',
          desc: 'This is the description for the fourth list item',
          link: 'https://www.google.com'
        },
        {
          name: 'Item 4',
        },
        {
          name: 'Item 5',
          desc: 'This is the description for the list item',
        }
      ]
    }
    return (
      <ScrollableList listData={listData} />
    )
  }
}
