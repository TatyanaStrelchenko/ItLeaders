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

  const titleSection = screen.getByText('Sponsors');
  expect(titleSection).toBeInTheDocument();

  // screen.debug();
  //
  // const title = screen.getByRole('heading');
  // expect(title).toBeInTheDocument();

  //check the count of sponsors
  expect(screen.getByDisplayValue('56')).toBeInTheDocument();
  const items = screen.findAllByRole('listitem');
  expect(items).toHaveLength(13);

  //check the remaining number of sponsors

  //check the avatars show

  //check the popup show

  //check the popup info show

  //check the info in popups
});
