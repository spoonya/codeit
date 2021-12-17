export interface Inner {
  children: React.ReactNode;
}

export interface Item {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}
