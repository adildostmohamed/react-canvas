import React from 'react';

const EmbeddedForm = (props) => {
  return (
    <div>
      { props.form && props.form.hasOwnProperty("src") ? <iframe src={props.form.src}  width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe> : null }
    </div>
  )
}

export default EmbeddedForm;
