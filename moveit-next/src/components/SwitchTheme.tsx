import React, { useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import styles from "../styles/components/Switch.module.css";
interface Props {
  toggleTheme: () => void;
}

const SwitchTheme: React.FC<Props> = ({ toggleTheme }) => {
  const [isActive, setActive] = useState(true);
  useEffect(() => {
    isActive == false ? setActive(true) : setActive(false);
  }, [toggleTheme]);

  return (
    <ReactSwitch className={styles.switchContainer}
      onChange={toggleTheme}
      checked={isActive}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={25}
      offHandleColor={"#0366d6"}
      onHandleColor={"#FFF"}
      offColor={"#000"}
      onColor={"#D3D3D3"}
    />
  );
};
export default SwitchTheme;
