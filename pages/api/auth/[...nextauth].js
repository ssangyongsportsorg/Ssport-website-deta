import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LineProvider from "next-auth/providers/line";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),
    LineProvider({
      clientId: process.env.Line_ID,
      clientSecret: process.env.Line_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.Discord_ID,
      clientSecret: process.env.Discord_SECRET,
    }),
  ],
 callbacks: {
    jwt({ token, user }) {
      if(user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role
      return session
    },
  },
};

export default NextAuth(authOptions);
