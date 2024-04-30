import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { PrivateRoute } from '../private-route/PrivateRoute';

import { FallbackError } from '@/shared/ui/fallback-error/FallbackError';

export const ErrorBoundaryWrap = ({
  children,
  isPrivate = false,
}: {
  children: ReactNode;
  isPrivate?: boolean;
}) => (
  <ErrorBoundary FallbackComponent={FallbackError}>
    {isPrivate ? <PrivateRoute redirect='login'>{children}</PrivateRoute> : children}
  </ErrorBoundary>
);
