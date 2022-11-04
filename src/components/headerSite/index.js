import React, { useState } from "react";
import { HeaderSiteTemplate } from "./HeaderSite.template";

const HeaderSite = () => {
  const [hideDropDown, setHideDropDown] = useState(true);
  const handleShowDropDown = () => setHideDropDown(!hideDropDown);
  return (
    <HeaderSiteTemplate
      hideDropDown={hideDropDown}
      onShowDropDown={handleShowDropDown}
    />
  );
};

export { HeaderSite };
