// @ts-nocheck
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "../../../utils/db";
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient({ log: ['query'] });

const createIfNotExists = async (name: string, email: string) => {
  fetch(`${process.env.BASE_URL}/v1/auth/social`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, social: "Google" }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((e) => console.log(e));
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, profile }) {
      console.log("user", user);
      const data = await createIfNotExists(user.name, user.email, user.image);
      return true;
    },
    async session({ session, token }) {
      session.user.uid = token.sub;
      await createIfNotExists(session.user.name, session.user.email);
      return session;
    },
  },
};

export default NextAuth(authOptions);
