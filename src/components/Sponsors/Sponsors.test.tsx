import { render, screen } from '@testing-library/react';
import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import Sponsors from './Sponsors';
import { SponsorsQueryResponse } from '../../__generated__/SponsorsQuery.graphql';

function renderSponsors() {
  const mockEnvironment = createMockEnvironment();

  const { container } = render(
    <RelayEnvironmentProvider environment={mockEnvironment}>
      <Suspense fallback="Loading...">
        <Sponsors />
      </Suspense>
    </RelayEnvironmentProvider>,
  );

  return {
    mockEnvironment,
    container,
  };
}

test('renders sponsors information', async () => {
  const { mockEnvironment } = renderSponsors();

  mockEnvironment.mock.resolveMostRecentOperation((operation: any) =>
    MockPayloadGenerator.generate(operation, {
      Query(): SponsorsQueryResponse {
        return {
          user: {
            sponsors: {
              totalCount: 56,
              edges: [
                {
                  node: {
                    location: 'Sponsor address',
                    name: 'Sponsor name',
                    login: 'm0nica',
                    avatarUrl: 'url',
                    bio: 'Sponsors bio',
                  },
                },
              ],
            },
          },
        };
      },
    }),
  );

  //check sponsors info
  expect(await screen.findByText('Sponsor name')).toBeInTheDocument();
  const image = screen.getByAltText(/avatar/i);

  expect(screen.getByText('Sponsor address')).toBeInTheDocument();
  expect(screen.getByText('m0nica')).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'url');
  expect(screen.getByText('Sponsors bio')).toBeInTheDocument();

  const titleSection = screen.getByText('Sponsors');
  expect(titleSection).toBeInTheDocument();
});
