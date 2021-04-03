import { SelectItem } from 'primeng/api';

export interface DisplayElement {
  name: string;
  type: 'input' | 'dropdown' | 'switch';
  displayoptions: SelectItem[];
  placeholder?: string;
  blabel?: string;
  label?: string;
  command?(): void;
}
