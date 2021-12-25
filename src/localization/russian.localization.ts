import Localization from './types/localization.type';

const russian: Localization = {
  header: {
    signIn: 'Войти',
    run: 'Запуск',
  },
  tooltips: {
    sidebar: {
      share: 'Поделиться',
      settings: 'Настройки',
    },
  },
  sidebar: {
    share: {
      title: 'Поделиться проектом',
      label: 'Ссылка общего доступа',
      button: 'Копировать',
      alert: 'Ссылка скопирована!',
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
            vertical: 'вертикально',
            horizontal: 'горизонтально',
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
      },
    },
  },
  console: {
    title: 'Консоль',
    clear: 'Очистить',
  },
};

export default russian;
