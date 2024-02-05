import React from 'react';
import { Box, Switch } from '@chakra-ui/react';

interface DragBoxToggleProps {
  isChecked: boolean;
  onChange: () => void;
}

const DragBoxToggle = (props: DragBoxToggleProps) => {
  const { isChecked, onChange } = props;

  return (
    <Box mt={6} ml={4} h="auto">
      Mostrar DragBox <Switch size="lg" isChecked={isChecked} onChange={onChange} />
    </Box>
  );
};

export default DragBoxToggle;
