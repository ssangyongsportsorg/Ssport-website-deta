import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import LineProvider from "next-auth/providers/line"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions = {
  // 配置一個或多個驗證提供者
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
      authorization: {
        params: {},
      },
      checks: ['none'],
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
  theme: {
    logo: "/logo.png", // 圖片的絕對URL
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // 在登錄後將訪問令牌持久化到令牌中
      if (account) {
        token.accessToken = account.access_token
      }

      // 根據用戶信息賦予角色
      const isAdmin = user.email === 'Ssangyongsports1@gmail.com' || user.email.endsWith('@example.com')
      token.role = isAdmin ? 'admin' : 'user'

      return token
    },
    async session({ session, token }) {
      // 向客戶端發送訪問令牌等屬性
      session.accessToken = token.accessToken
      session.user.role = token.role
      return session
    },
  },
}

export default NextAuth(authOptions)