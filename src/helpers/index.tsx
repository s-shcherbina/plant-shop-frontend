import { Box } from '@mui/material';
import { styled } from '@mui/material';

export const Flex = styled(Box)({
  display: 'flex',
});

export const AlignCenter = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const Between = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const BetweenCenter = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const JustifyCenter = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export const Center = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
