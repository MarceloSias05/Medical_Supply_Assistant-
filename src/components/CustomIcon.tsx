import React from 'react';
import { Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IconProps {
  name: string;
  size: number;
  color: string;
}

const CustomIcon = ({ name, size, color }: IconProps): React.JSX.Element => {
  return <MaterialIcons name={name} size={size} color={color} />;
};

export default CustomIcon;