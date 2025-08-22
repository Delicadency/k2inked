export const Routes = {
  HOME: "/",
  GALLERY: "/galeria",
  REGULATIONS: "/regulamin",
  POLICY: "/polityka-prywatnosci",
  CONTACT: "/kontakt",
} as const;

export type RouteKeys = keyof typeof Routes;
export type RouteValues = (typeof Routes)[RouteKeys];
