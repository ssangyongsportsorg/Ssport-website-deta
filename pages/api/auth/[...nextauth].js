import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import LineProvider from "next-auth/providers/line"
import DiscordProvider from "next-auth/providers/discord"
export const authOptions = {
  // Configure one or more authentication providers
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
    }),  ],
  theme: {
  logo: "/logo.png", // Absolute URL to image
},
  callbacks: {
    async session(session, user) {
      session.user = user;
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (user) {
        token.role = user.role; // 將使用者的角色存儲在 JWT token 中
      }
      return token;
    },
    async signIn(user) {
      // 檢查使用者的電子郵件地址
      if (user.email === 'didk@dod.com') {
        user.role = 'admin'; // 將使用者角色設置為 "admin"
      }
      return true;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);

