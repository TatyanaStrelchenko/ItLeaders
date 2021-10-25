import { render, screen } from '@testing-library/react';
import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import Sponsors from './Sponsors';

test('renders sponsors text', () => {
  const mockEnvironment = createMockEnvironment();

  mockEnvironment.mock.queueOperationResolver((operation) =>
    MockPayloadGenerator.generate(operation),
  );

  render(
    <RelayEnvironmentProvider environment={mockEnvironment}>
      <Suspense fallback="Loading...">
        <Sponsors />
      </Suspense>
    </RelayEnvironmentProvider>,
  );

  const titleText = screen.queryByText('Sponsors');
  expect(titleText).toBeInTheDocument();

  screen.debug();

  const title = screen.getByRole('heading');
  expect(title).toBeInTheDocument();
});
