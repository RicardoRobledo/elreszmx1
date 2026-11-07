export type SocialIcon =
  | "youtube"
  | "twitch"
  | "x"
  | "instagram"
  | "tiktok"
  | "discord"
  | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
  handle?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export type ContactMotive =
  | "patrocinio"
  | "torneo"
  | "servicios"
  | "colaboracion"
  | "merch"
  | "otro";

export interface ContactMotiveOption {
  value: ContactMotive;
  label: string;
}

export type TeamRole = "resz" | "casters" | "stream" | "brackets";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tags: string[];
  bio: string;
  image: string;
  imageAlt: string;
  initials: string;
  featured?: boolean;
}

export type ServiceIcon = "bracket" | "mic" | "stream" | "package";

export interface Service {
  id: string;
  number: string;
  title: string;
  kicker: string;
  description: string;
  bullets: string[];
  idealFor: string;
  icon: ServiceIcon;
  featured?: boolean;
}

export type WorkCategory = "torneos" | "costreams" | "comunidad";

export type WorkFilter = "todos" | WorkCategory;

export interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  youtubePlaylistId: string;
}

export interface SponsorValue {
  title: string;
  description: string;
  icon: "eye" | "handshake" | "file" | "shield";
}

export interface SponsorPhase {
  number: string;
  title: string;
  description: string;
}

export interface SponsorTournament {
  name: string;
  game: string;
  format: string;
  status: string;
  vodUrl: string;
}

export interface WeeklyEvent {
  id: string;
  title: string;
  game: string;
  dayOfWeek: number;
  dayLabel: string;
  time: string;
  timezone: string;
  format: string;
  platform: string;
  description: string;
  registrationUrl: string;
}

export interface UpcomingProject {
  id: string;
  title: string;
  status: string;
  period: string;
  description: string;
  progress: number;
}

export type MerchType = "tee" | "hoodie" | "mousepad" | "stickers";

export interface MerchItem {
  id: string;
  name: string;
  type: MerchType;
  description: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HeroCopy {
  eyebrow: string;
  titleTop: string;
  titleMiddle: string;
  titleAccent: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}
