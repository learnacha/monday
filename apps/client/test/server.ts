import { DefaultBodyType, MockedRequest, RestHandler, rest } from 'msw';
import { SetupServer, setupServer } from 'msw/node';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.json('John Smith'), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

export const appServer = (
  customHandlers: RestHandler<MockedRequest<DefaultBodyType>>[] = []
): SetupServer => {
  return setupServer(...handlers, ...customHandlers);
};
