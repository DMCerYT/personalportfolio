import { NAV_ITEMS } from '../../data/navigation';
import NavbarButton from '../NavbarButton';

export default function NavigationLinks({ mobile = false, onNavigate }) {
  return NAV_ITEMS.map(item => (
    <NavbarButton key={item.link} {...item} mobile={mobile} onNavigate={onNavigate} />
  ));
}
