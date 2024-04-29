export interface ErrorMessage {
  EMAIL_EXISTS: string;
  EMAIL_NOT_FOUND: string;
  INVALID_PASSWORD: string;
  TOKEN_EXPIRED: string;
  TOO_MANY_ATTEMPTS_TRY_LATER: string;
  USER_DISABLED: string;
}

export const ERROR_MESSAGE: ErrorMessage = {
  EMAIL_EXISTS: 'Пользователь с такой почтой существует',
  INVALID_PASSWORD: 'Не верный пароль',
  EMAIL_NOT_FOUND: 'Пользователь с такой почтой не найден',
  USER_DISABLED: 'Учетная запись пользователя отключена администратором.',
  TOO_MANY_ATTEMPTS_TRY_LATER:
    'Мы заблокировали все запросы с этого устройства из-за необычной активности. Попробуйте позже.',
  TOKEN_EXPIRED: 'Войдите заново',
};
