import { useState } from "react";

const HadleToggle = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  setIsDropdownVisible(!isDropdownVisible);
};

export default HadleToggle;
