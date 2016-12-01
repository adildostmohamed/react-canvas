import React from 'react';

import CardContentContainer from 'components/cards/CardContentContainer';

const PageWrapper2 = (props) => {
  return (
    <div className="container">
      <CardContentContainer cardsToSync={'contentCards'} />
    </div>
  )
};

export default PageWrapper2;
