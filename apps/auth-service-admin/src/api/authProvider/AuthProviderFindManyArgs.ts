import { AuthProviderWhereInput } from "./AuthProviderWhereInput";
import { AuthProviderOrderByInput } from "./AuthProviderOrderByInput";

export type AuthProviderFindManyArgs = {
  where?: AuthProviderWhereInput;
  orderBy?: Array<AuthProviderOrderByInput>;
  skip?: number;
  take?: number;
};
