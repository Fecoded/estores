import React from "react";

import {
  SpinnerContainer,
  SpinnerOverlay,
  SpinnerOverlay1,
} from "./spinner-style";

export const SpinnerOne = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export const SpinnerTwo = () => (
  <SpinnerOverlay1>
    <SpinnerContainer />
  </SpinnerOverlay1>
);
