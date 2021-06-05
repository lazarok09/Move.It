import React, { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../contexts/ThemeContext';

export default function SwitchTheme() {
    
    const context = useContext(ThemeContext);
    const {toggleTheme, isChecked}  = context;
    return (
    <ReactSwitch 
    onChange={toggleTheme}
    checked={false}
    checkedIcon={false}
    uncheckedIcon={false}
    height={10}
    width={ 40 }
    handleDiameter={25}
    offColor={'#000'}
    onColor={'#D3D3D3'}
    />
    );
}