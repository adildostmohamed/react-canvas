import React from 'react';

import CardContentContainer from 'components/cards/CardContentContainer';
import ScrollableListContainer from 'components/lists/ScrollableListContainer';

const PageWrapper1 = (props) => {
  return (
    <div class="row">
      <div className="col-sm-8 col-md-9">
        <CardContentContainer cardsToSync={'cards'} />
      </div>
      <div className="col-sm-4 col-md-3">
        <ScrollableListContainer listToSync={'newsData'}/>
      </div>
    </div>
  )
};

export default PageWrapper1;
