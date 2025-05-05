import {
  Client,
  Account,
  ID,
  Databases,
  OAuthProvider,
  Avatars,
  Query,
  Storage,
} from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
  platform: "com.purple.reown",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export async function login() { // Renamed for clarity
  try {
      const redirectUri = Linking.createURL("/");

      const response = await account.createOAuth2Token(
          OAuthProvider.Google,
          redirectUri
      );
      if (!response) throw new Error("Create OAuth2 token failed");

      const browserResult = await openAuthSessionAsync(
          response.toString(),
          redirectUri
      );
      if (browserResult.type !== "success")
          throw new Error("Create OAuth2 token failed");

      const url = new URL(browserResult.url);
      const secret = url.searchParams.get("secret")?.toString();
      const userId = url.searchParams.get("userId")?.toString();
      if (!secret || !userId) throw new Error("Create OAuth2 token failed");

      const session = await account.createSession(userId, secret);
      if (!session) throw new Error("Failed to create session");

      return true;
  } catch (error) {
      console.error(error);
      return false;
  }
}

export async function loginAsGuest() {
  try {
      const session = await account.createAnonymousSession();
      if (session?.$id) {
          console.log("Guest session created:", session.$id);
          return true;
      } else {
          console.error("Failed to create anonymous session");
          return false;
      }
  } catch (error) {
      console.error("Error creating anonymous session:", error);
      return false;
  }
}

export async function logout() {
  try {
      const result = await account.deleteSession("current");
      return result;
  } catch (error) {
      console.error(error);
      return false;
  }
}

export async function getCurrentUser() {
  try {
      const result = await account.get();
      return result.$id ? result : null;
  } catch (error) {
      console.log("Error getting current user:", error);
      return null;
  }
}