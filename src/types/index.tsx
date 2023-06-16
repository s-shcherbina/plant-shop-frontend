export interface ISideBarButton {
  pathname: string;
  path: string;
  // icon: ReactNode;
  icon?: JSX.Element;
  name: string;
  click: () => void;
}

export interface IDrawerCatalog {
  setPage: (value: string) => void;
  navigate: (to: string) => void;
  catalogOpen: boolean;
  catalogToggle: () => void;
}
