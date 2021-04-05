import React from "react";

const componentWithSuspense = (Component) => (props) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default componentWithSuspense;
