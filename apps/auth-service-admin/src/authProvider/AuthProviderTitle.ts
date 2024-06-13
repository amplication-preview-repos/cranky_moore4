import { AuthProvider as TAuthProvider } from "../api/authProvider/AuthProvider";

export const AUTHPROVIDER_TITLE_FIELD = "id";

export const AuthProviderTitle = (record: TAuthProvider): string => {
  return record.id?.toString() || String(record.id);
};
