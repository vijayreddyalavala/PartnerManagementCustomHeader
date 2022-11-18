import React from 'react';

import './style.css';

export default function PartnerManagementHeader(props) {
  return (
    <div>
      <GlobalHeader>
        <h1>{props.breadcrumbName}</h1>
        <p>{props.addButtonText}</p>
      </GlobalHeader>
    </div>
  );
}
