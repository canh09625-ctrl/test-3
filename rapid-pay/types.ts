
import type { ReactNode } from 'react';

export interface ActionItem {
  label: string;
  icon: ReactNode;
  color: string;
}

export interface ServiceItem {
  label: string;
  icon: ReactNode;
  color: string;
  iconColor: string;
}

export interface NavItem {
  label: string;
  icon: ReactNode;
  active?: boolean;
}
