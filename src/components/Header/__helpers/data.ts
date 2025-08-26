import { InternalHref, path, type ArtistSlug, STATIC_ROUTES } from "@/routes";

export type NavLink = {
  kind: "link";
  label: string;
  href: InternalHref;
  isActive?: (pathname: string) => boolean;
};

export type NavGroup = {
  kind: "group";
  label: string;
  collapsible?: boolean;
  items: readonly NavNode[];
  defaultOpen?: boolean;
};

export type NavNode = NavLink | NavGroup;

const ARTIST_LABEL: Record<ArtistSlug, string> = {
  klaudia: "KLAUDIA",
  kari: "KARI",
  sonia: "SONIA",
  ewelina: "EWELINA",
  mirella: "MIRELLA",
  emi: "EMI",
} as const;

const artistLink = (slug: ArtistSlug): NavLink => ({
  kind: "link",
  label: ARTIST_LABEL[slug],
  href: path.artist(slug),
  isActive: (p) => p.startsWith(path.artist(slug)),
});

const tattooArtists = (
  ["klaudia", "kari", "sonia", "ewelina", "mirella"] as const
).map(artistLink);

const piercingArtists = (["emi"] as const).map(artistLink);

export const NAV_MOBILE = [
  { kind: "link", label: "STRONA GŁÓWNA", href: STATIC_ROUTES.HOME },
  {
    kind: "group",
    label: "ARTYŚCI",
    collapsible: true,
    items: [
      {
        kind: "group",
        label: "Tatuaż",
        collapsible: true,
        items: tattooArtists,
      },
      {
        kind: "group",
        label: "Piercing",
        collapsible: true,
        items: piercingArtists,
      },
    ],
  },
  { kind: "link", label: "Galeria", href: STATIC_ROUTES.GALLERY },
  { kind: "link", label: "Regulamin", href: STATIC_ROUTES.REGULATIONS },
  { kind: "link", label: "Kontakt", href: STATIC_ROUTES.CONTACT },
] as const satisfies readonly NavNode[];
