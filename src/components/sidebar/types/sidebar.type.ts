export interface InnerProps {
  children: React.ReactNode;
}

export interface TabProps {
  children?: React.ReactNode;
  isActive: boolean;
}

export interface ItemProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export interface DialogTitlesProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
