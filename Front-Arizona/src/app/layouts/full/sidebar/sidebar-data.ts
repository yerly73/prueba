import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  
  {
    displayName: 'Venta de pasaje',
    iconName: 'sell', // Asegúrate de que 'sell' sea un ícono válido en Material Icons
    route: '/page/registroBoletas',
    children: [ // Añade un array de subelementos
      {
        displayName: 'Reserva de pasaje',
        route: '/page/reservaPasaje' // Ruta específica de reserva 
      },
      {
        displayName: 'Lista de Pasajeros',
        route: '/page/listaPasajeros' // Ruta específica de reserva 
      }
    ]
  },
  {
    displayName: 'Alquiler',
    iconName: 'rental', // Asegúrate de que 'rental' sea un ícono válido en Material Icons
    route: '/page/registroBus',
  },
  {
    displayName: 'Encomienda',
    iconName: 'local_shipping', // 'local_shipping' es un ícono de encomienda en Material Icons
    route: '/page/registroEncomienda',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock', // 'lock' es un ícono válido en Material Icons para login
    route: '/page/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'person_add', // 'person_add' es un ícono válido en Material Icons para registro
    route: '/page/authentication/register',
  },
  
];
