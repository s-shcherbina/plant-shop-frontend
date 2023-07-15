export interface ISideBarButton {
  pathname: string;
  path: string;
  // icon: ReactNode;
  icon?: JSX.Element;
  name: string;
  click: () => void;
}

export interface IDrawerCatalog {
  // setPage: (value: string) => void;
  navigate: (to: string) => void;
  catalogOpen: boolean;
  catalogToggle: () => void;
}

export interface IPhoneMask {
  textmask: string;
}

export interface IPhoneProps {
  values: IPhoneMask;
  setValues: (values: IPhoneMask) => void;
}

export interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

// export interface IPropsLogin<
//   TFieldValues extends FieldValues = FieldValues,
//   TContext = any
// > {
//   navigate: (to: string) => void;
//   register: UseFormRegister<TFieldValues>;
//   errors: FieldErrors<TFieldValues>;
// }

export interface IDepartNP {
  Description: string;
}

export interface ILocal {
  label: string;
  Ref: string;
  Description: string;
  AreaDescription: string;
  SettlementTypeDescription: string;
}

export interface IPropsNovaPoshta {
  locality: ILocal | null;
  setLocality: (value: ILocal | null) => void;
  department: string;
  setDepartment: (value: string) => void;
}

export interface IPropsUkrPoshta extends IPropsNovaPoshta {
  delivery: string | null;
}

export interface ISearchLocality {
  locality: ILocal | null;
  setLocality: (value: ILocal | null) => void;
  search: string;
  setSearch: (value: string) => void;
  locals: ILocal[];
  setDepartment: (value: string) => void;
}

export interface IPropsDelivery extends IPropsUkrPoshta {
  setDelivery: (value: string | null) => void;
}

// export interface IPropsCustomerData extends IPropsDelivery {
export interface IPropsCustomerData {
  // firstName: string;
  // setFirstName: (value: string) => void;
  // lastName: string;
  // setLastName: (value: string) => void;
  // values: IPhoneMask;
  // setValues: (values: IPhoneMask) => void;
  formPhone: boolean;
  setFormPhone: (value: boolean) => void;
}

export interface IPropsRegister extends IPropsDelivery {
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  values: IPhoneMask;
  setValues: (values: IPhoneMask) => void;
  navigate: (to: string) => void;
  form: boolean;
  setForm: (value: boolean) => void;
}

export interface IAuthState {
  user: IUser;
  isLogged: boolean;
  isAdmin: boolean;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IpropsLogin {
  // setEmail: (value: string) => void;
  // setPassword: (value: string) => void;
  // navigate: (to: string) => void;
  setGrow: (value: boolean) => void;
}

export interface IRegisterData extends ILoginData {
  phone: string;
  firstName: string;
  lastName: string;
  delivery: string;
  locality: string;
  department: string;
}

export interface IUserData {
  id: number | null;
  phone: string;
  firstName: string;
  lastName: string;
  delivery: string;
  locality: string;
  department: string;
  role: string;
}

export interface IUser {
  accessToken: string;
  refreshToken: string;
  userData: IUserData;
}

export interface IAuth {
  open: boolean;
  handleClose: () => void;
}

export interface ILoginButton {
  iconButton: boolean;
}

export interface IUserResponse {
  id: number;
  role: string;
}

export interface AuthResponse {
  userData: IUserResponse;
  accessToken: string;
  refreshToken: string;
}

export interface IOrigin {
  vertical: number | 'center' | 'bottom' | 'top';
  horizontal: number | 'center' | 'right' | 'left';
}
