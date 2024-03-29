import { User } from "@prisma/client";

import { Listing } from "@prisma/client";

export type SafeListings = Omit<Listing, "createdAt"> & {
  createAt: string;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
