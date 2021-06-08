import React, { useContext, ReactNode, useEffect, useState } from "react";
import ReactSwitch from "react-switch";

interface Props {
  toggleTheme: () => void;
}

const SwitchTheme: React.FC<Props> = ({ toggleTheme }) => {
  const [isActive, setActive] = useState(true);
  useEffect(() => {
    isActive == false ? setActive(true) : setActive(false);
  }, [toggleTheme]);

  return (
    <ReactSwitch
      onChange={toggleTheme}
      checked={isActive}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={25}
      offColor={"#000"}
      onColor={"#D3D3D3"}
    />
  );
};
export default SwitchTheme;
