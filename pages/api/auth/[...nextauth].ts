import NextAuth, { Awaitable, Session, Theme, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });

        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    // This callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated
    // (i.e whenever a session is accessed in the client).
    // If parameters other than token exist, that means that the user is being signed in.
    // Persist additional data like an access_token on the token parameter.
    jwt: async (params: {
      token: JWT;
      user?: User | AdapterUser;
      isNewUser?: boolean;
    }): Promise<JWT> => {
      const { token, user } = params;

      const isSignedIn = !!user;

      // console.log({ message: 'JWT callback', token, user, isSignedIn });

      if (isSignedIn) {
        token.accessToken = user.accessToken;

        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },
    // The session callback is called whenever a session is checked
    session: async (params: {
      session: Session;
      user: User | AdapterUser;
      token: JWT;
    }): Promise<Session> => {
      const { session, user, token } = params;

      // console.log({ message: 'Session callback', session, user, token });

      session.accessToken = token.accessToken;

      session.id = token.id;
      session.name = token.name;
      session.email = token.email;

      return session;
    },
  },
  theme: 'light' as Theme,
};

export default NextAuth(authOptions);
