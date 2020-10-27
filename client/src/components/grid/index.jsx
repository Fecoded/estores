import React from 'react';

export const TwoGridColumn = ({ children }) => (
  <div className='row'>{children}</div>
);

export const LeftSide = ({ children }) => (
  <div className='col s7'>{children}</div>
);

export const RightSide = ({ children }) => (
  <div className='col s5'>{children}</div>
);
