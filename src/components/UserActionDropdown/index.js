import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

import Dropdown from "../Dropdown";
import { NAVIGATION_USER_DROPDOWN } from "../../utils/constant";

const UserActionDropdown = () => {
  const [isLogin, setIsLogin] = useState(false);

  const userDropdown = NAVIGATION_USER_DROPDOWN.filter(
    (item) => item.requiresAuth !== true
  );
  console.log(userDropdown);

  const handleChangeUserAction = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Dropdown
      items={userDropdown}
      dropdownHover={true}
      onChange={handleChangeUserAction}
    >
      {/* <Button onClick={() => openModal("Register_Modal_Open")}> */}

      {isLogin ? (
        <FontAwesomeIcon icon={faUserAlt} className="fs-5" />
      ) : (
        <span>Login</span>
      )}

      {/* </Button> */}
    </Dropdown>
  );
};

export default UserActionDropdown;
