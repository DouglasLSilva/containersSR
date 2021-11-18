import { Skeleton } from '@material-ui/lab';
import styled from 'styled-components';

import { neutral } from '../../../styles/colors';

export const LoadingSkeleton = styled(Skeleton)`
  background-color: ${neutral[400]};
`;
