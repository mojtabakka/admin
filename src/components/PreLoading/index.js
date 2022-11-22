import { ErrorBoundary } from "components/ErrorBoundary";
import React from "react";
import { PreLoadingTemplate } from "./PreLoading.template";

const PreLoading = (props) => {
  return (
    <ErrorBoundary>
      <PreLoadingTemplate {...props} />
    </ErrorBoundary>
  );
};

export { PreLoading };
