export interface Inner {
  children: React.ReactNode;
}

export interface Tab {
  children?: React.ReactNode;
  isActive: boolean;
}

export interface Item {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export interface Switch {
  label: string;
  checked: boolean;
  onChange: () => void;
}
