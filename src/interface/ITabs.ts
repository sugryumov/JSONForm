export interface ITabs<T = {}> {
  id: number;
  label: string;
  Component: React.FC<T>;
}
