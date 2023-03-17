// @ts-nocheck
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
});

// const createIfNotExists = async (name: string, email: string) => {
//   const data = await fetch(`${process.env.BASE_URL}/v1/auth/social`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email: email, social: "Google" }),
//   });
//   return data.json();
// };

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     async signIn({ user, profile }) {
//       console.log("user", user);
//       const data = await createIfNotExists(user.name, user.email, user.image);
//       console.log("user server", data.user);

//       user.uid = data.user.id;
//       user.name = data.user.name;
//       console.log(user);

//       return true;
//     },
//     async session({ session, token }) {
//       const data = await createIfNotExists(
//         session.user.name,
//         session.user.email
//       );
//       console.log(data);
//       session.uid = data.user.id;
//       session.user.name = data.user.name;
//       console.log("session", session);
//       return session;
//     },
//   },
// };

// export default NextAuth(authOptions);
