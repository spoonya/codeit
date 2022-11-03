import Localization from './types/localization.type';

const russian: Localization = {
  header: {
    signIn: 'Войти',
    run: 'Запуск',
    projectName: {
      alert: 'Имя проекта изменено',
    },
  },
  form: {
    signIn: 'Вход',
    signUp: 'Регистрация',
    signInBtn: 'Войти',
    signUpBtn: 'Зарегистрироваться',
    username: 'Имя пользователя',
    password: 'Пароль',
    email: 'E-mail',
    errors: {
      emptyPassword: 'Пароль не может быть пустым',
      invalidPassword: 'Не менее 6 символов',
      emptyEmail: 'E-mail не может быть пустым',
      invalidEmail: 'Некорректный e-mail',
      emptyUsername: 'Имя не может быть пустым',
      invalidUsername: 'Не менее 2 символов',
    },
  },
  tooltips: {
    sidebar: {
      share: 'Поделиться',
      settings: 'Настройки',
    },
    header: {
      projectName: {
        edit: 'Изменить имя',
        save: 'Сохранить',
      },
    },
  },
  sidebar: {
    share: {
      title: 'Поделиться проектом',
      label: 'Ссылка общего доступа',
      button: 'Копировать',
      alert: 'Ссылка скопирована',
    },
    settings: {
      title: 'Настройки',
      general: {
        title: 'Общие',
        lightTheme: 'Светлая тема',
        language: 'Язык',
        layout: {
          title: 'Вид окон',
          values: {
            vertical: 'вертикальный',
            horizontal: 'горизонтальный',
          },
        },
      },
      editor: {
        title: 'Редактор',
        autorun: 'Автозапуск',
        fontSize: {
          title: 'Размер шрифта',
          values: {
            small: 'маленький',
            normal: 'нормальный',
            large: 'большой',
            huge: 'огромный',
          },
        },
        indentSize: {
          title: 'Размер отступа',
        },
        indentType: {
          title: 'Тип оступа',
          values: {
            spaces: 'пробелы',
            tabs: 'табы',
          },
        },
      },
    },
  },
  console: {
    title: 'Консоль',
    clear: 'Очистить',
  },
};

export default russian;
