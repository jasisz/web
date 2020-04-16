import Routes from '../../routes';
import { ReactComponent as HomeIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-Home-white.svg';
import { ReactComponent as FAQIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-FAQ-white.svg';
import { ReactComponent as InfoIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-Info-white.svg';
import { ReactComponent as BurgerIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-More-white.svg';

export const HomeItem = {
  label: 'Home',
  Icon: HomeIcon,
  path: Routes.Home
};

export const FAQItem = {
  label: 'Pytania i odp.',
  Icon: FAQIcon
  // path: Routes.Home
};

export const InfoItem = {
  label: 'Porady',
  Icon: InfoIcon,
  path: Routes.AdviceInformation
};

export const BurgerItem = {
  label: 'Więcej',
  Icon: BurgerIcon,
  openMenu: true
};

export const menuItems = [HomeItem, FAQItem, InfoItem, BurgerItem];
