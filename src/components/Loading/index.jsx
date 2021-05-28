import React from 'react';
import loadingIcon from 'assets/images/loading.svg';

function Loading() {
  return (
    <div className="loading">
      <img src={loadingIcon} alt="loading..." />
    </div>
  );
}

export default Loading;