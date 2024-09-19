import { APP_NAME } from "./app-info";

export const TEXT_CONTENT = {
  register: {
    header: `¡Bienvenido a ${APP_NAME}!`,
    question: '¿Ya tenés cuenta?',
    linkText: 'Iniciá sesión',
    linkTextThirdParty: 'Registrate con',
    linkPath: '/login'
  },
  login: {
    header: `¡Bienvenido nuevamente a ${APP_NAME}!`,
    question: '¿No tenés cuenta?',
    linkText: 'Registrate',
    linkTextThirdParty: 'Iniciá sesión con',
    linkPath: '/register'
  },
  userInfo: {
    header: `Terminá de registrarte`,
    question: '',
    linkText: '',
    linkTextThirdParty: '',
    linkPath: ''
  },
  petsForm: {
    header: `Contanos sobre tu mascota/s`,
    question: '',
    linkText: '',
    linkTextThirdParty: '',
    linkPath: ''
  }
}