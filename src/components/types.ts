export interface Space {
  size?: number;
}

export interface UserZoneData {
  horizontal?: boolean;
  backgroundColor?: string;
  size?: number;
  minSize?: number;
  children?: UserZoneData[];

  space?: Space;
}

export interface ZoneData extends UserZoneData {
  children?: ZoneData[];
  hasChildren: boolean;
}