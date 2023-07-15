import {
  Collections,
  LocalFlorist,
  ContactPage,
  Home,
  NoteAdd,
  ManageAccounts,
  PersonRemove,
  Logout,
  HowToReg,
  LockPerson,
  AdminPanelSettingsSharp,
} from '@mui/icons-material';
import imgMain from '../assets/img-main.jpg';
import imgOne from '../assets/img-one.jpg';
import imgTwo from '../assets/img-two.jpg';
import imgThree from '../assets/img-three.jpg';
import imgFour from '../assets/img-four.jpg';
import imgFive from '../assets/img-five.jpg';
import HomePage from '../pages/home';
import Subgroup from '../pages/subgroup';
import Group from '../pages/group';
import Gallery from '../pages/gallery';
import Care from '../pages/care';
import Order from '../pages/order';
import Product from '../pages/product';
import AuthRoot from '../pages/auth';
import Contacts from '../pages/contacts';

export const navMenu = [
  {
    name: 'Головна',
    icon: <Home fontSize='small' />,
    path: '/',
  },
  {
    name: 'Фотогалерея',
    icon: <Collections fontSize='small' />,
    path: '/gallery',
  },
  {
    name: 'Контакти',
    icon: <ContactPage fontSize='small' />,
    path: '/contacts',
  },
  {
    name: `Як${'\u00A0'}доглядати`,
    // icon: <Description fontSize='small' />,
    icon: <LocalFlorist fontSize='small' />,
    path: '/care',
  },
  {
    name: `Як${'\u00A0'}замовити`,
    icon: <NoteAdd fontSize='small' />,
    // icon: <Yard fontSize='small' />,
    path: '/order',
  },
];

export const pages = [
  {
    element: <HomePage />,
    path: '/',
  },
  {
    element: <Contacts />,
    path: '/contacts',
  },
  {
    element: <Group />,
    path: '/group',
  },
  {
    element: <Subgroup />,
    path: '/subgroup',
  },
  {
    element: <Gallery />,
    path: '/gallery',
  },
  {
    element: <Care />,
    path: '/care',
  },
  {
    element: <Order />,
    path: '/order',
  },
  {
    element: <Product />,
    path: '/product',
  },
  {
    element: <AuthRoot />,
    path: '/login',
  },
  {
    element: <AuthRoot />,
    path: '/register',
  },
  {
    element: <HomePage />,
    path: '*',
  },
];

export const items = [
  {
    name: 'Random Name #Main',
    description: 'Probably the most random thing you have ever seen!',
    image: imgMain,
  },
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
    image: imgOne,
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!Button className CheckButtonCheck it out',
    image: imgTwo,
  },
  {
    name: 'Random Name #3',
    description: 'Probably the most random thing you have ever seen!',
    image: imgThree,
  },
  {
    name: 'Random Name #4',
    description: 'Button className CheckButtonCheck it out!',
    image: imgFour,
  },
  {
    name: 'Random Name #5',
    description: 'Hello World!Button className CheckButtonCheck it out',
    image: imgFive,
  },
];

export const itemsXL = items.map((item, index) => [
  item,
  items[items.length - 1 - index],
]);

export const logoutActions = [
  { text: 'Вийти з аккаунту', icon: <Logout />, path: '/shop' },
  { text: 'Змінити особисті дані', icon: <ManageAccounts />, path: '/shop' },
  { text: 'Видалити аккаунт', icon: <PersonRemove />, path: '/shop' },
  {
    text: 'Адмін панель',
    icon: <AdminPanelSettingsSharp />,
    path: '/admin',
  },
];

export const loginActions = [
  { text: 'Реєстрація', icon: <HowToReg />, path: '/register' },
  { text: 'Авторизація', icon: <LockPerson />, path: '/login' },
];

export const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

export const groups = [
  { name: 'Троянди', path: '' },
  { name: 'Багаторічникі', path: '' },
  {
    // name: `Декоративні${'\u00A0'}кущі${'\u00A0'}та${'\u00A0'}дерева`,
    name: `Кущі${'\u00A0'}та${'\u00A0'}дерева`,
    path: '',
  },
  { name: `Плодово${'\u2011'}ягідні`, path: '' },
  { name: `Кімнатні${'\u00A0'}рослини`, path: '' },
  { name: `Стильні${'\u00A0'}букети`, path: '' },
  { name: `Насіння,${'\u00A0'}засоби${'\u00A0'}захисту`, path: '' },
];

export const groupsSideBar = [
  { name: 'Троянди', path: '' },
  { name: 'Багаторічникі', path: '' },
  { name: `Насіння,${'\u00A0'}захист`, path: '' },
  { name: `Стильні${'\u00A0'}букети`, path: '' },
  {
    name: `Кущі${'\u00A0'}та${'\u00A0'}дерева`,
    path: '',
  },
  { name: `Плодово${'\u2011'}ягідні`, path: '' },
  { name: `Кімнатні${'\u00A0'}рослини`, path: '' },
];

export const subgroups = [
  { name: 'Троянди', path: '', id: 'Троянди' },
  { name: 'Багаторічникі', path: '', id: 'Троянди' },
  { name: 'Багаторічник', path: '', id: 'Троянди' },
  { name: 'Багаторічн', path: '', id: 'Троянди' },
];
