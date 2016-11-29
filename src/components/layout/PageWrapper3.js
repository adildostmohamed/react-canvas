import React from 'react';

import EmbeddedFormContainer from 'components/forms/EmbeddedFormContainer';

const PageWrapper3 = (props) => {
  const formData = {
    src: "https://docs.google.com/a/pwc.com/forms/d/e/1FAIpQLSeKyEjdjBGq3N9n0h3eemTN0cM0ZYdQ25w8JO_Jz8y1HcMo5Q/viewform?embedded=true"
  }
  return (
    <EmbeddedFormContainer form={formData}/>
  )
};

export default PageWrapper3;
