import React from 'react';
import { Platform, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IconProps {
  name: string;
  size: number;
  color: string;
}

const Icon = ({ name, size, color }: IconProps): React.JSX.Element => {
  if (Platform.OS === 'web') {
    // For web, use Material Icons font
    return (
      <Text
        style={{
          fontFamily: 'Material Icons',
          fontSize: size,
          color: color,
        }}
      >
        {name}
      </Text>
    );
  }

  // For native platforms
  return <MaterialIcons name={name} size={size} color={color} />;
};

export default Icon;