import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),
    // 其他驗證提供者設置
  ],
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
