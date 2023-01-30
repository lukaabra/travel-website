import { Session } from 'inspector';
import NextAuth, { DefaultSession, Account, User, CallbackOptions } from 'next-auth/next';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  /**
   * Returned by the `jwt` callback and `getToken`, when using JWT sessions
   *
   * [`jwt` callback](https://next-auth.js.org/configuration/callbacks#jwt-callback) | [`getToken`](https://next-auth.js.org/tutorials/securing-pages-and-api-routes#using-gettoken)
   */
  interface JWT {
    accessToken: string;
    id: string;
    name: string;
    email: string;
  }
}

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession`, returned by the `session` callback
   * and also the shape received as a prop on the `SessionProvider` React Context
   *
   * [`useSession`](https://next-auth.js.org/getting-started/client#usesession) |
   * [`getSession`](https://next-auth.js.org/getting-started/client#getsession) |
   * [`SessionProvider`](https://next-auth.js.org/getting-started/client#sessionprovider) |
   * [`session` callback](https://next-auth.js.org/configuration/callbacks#jwt-callback)
   */
  interface Session {
    accessToken: string;
    id: string;
    name: string;
    email: string;
  }

  /**
   * The shape of the returned object in the OAuth providers' `profile` callback,
   * available in the `jwt` and `session` callbacks,
   * or the second parameter of the `session` callback, when using a database.
   *
   * [`signIn` callback](https://next-auth.js.org/configuration/callbacks#sign-in-callback) |
   * [`session` callback](https://next-auth.js.org/configuration/callbacks#jwt-callback) |
   * [`jwt` callback](https://next-auth.js.org/configuration/callbacks#jwt-callback) |
   * [`profile` OAuth provider callback](https://next-auth.js.org/configuration/providers#using-a-custom-provider)
   */
  interface User {
    accessToken: string;
    id: string;
    name: string;
    email: string;
  }
}
