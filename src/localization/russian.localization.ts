import Localization from './types/localization.type';

const russian: Localization = {
  header: {
    signIn: 'Войти',
  },
  tooltips: {
    sidebar: {
      share: 'Поделиться',
      settings: 'Настройки',
    },
  },
  sidebar: {
    share: {
      title: 'Поделиться ссылкой',
      label: 'Ссылка общего доступа',
      button: 'Копировать',
    },
    settings: {
      title: 'Настройки',
      general: {
        title: 'Общие',
        lightTheme: 'Светлая тема',
        language: 'Язык',
      },
      editor: {
        title: 'Редактор',
        fontSize: {
          title: 'Размер шрифта',
          variants: {
            small: 'маленький',
            normal: 'нормальный',
            large: 'большой',
            huge: 'огромный',
          },
        },
        indentSize: {
          title: 'Размер отступа',
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
