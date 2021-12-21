import Localization from './types/localization.type';

const english: Localization = {
  tooltips: {
    sidebar: {
      share: 'Share',
      settings: 'Settings',
    },
  },
  sidebar: {
    share: {
      title: 'Share',
      label: 'Shareable Link',
      button: 'Copy link',
    },
    settings: {
      title: 'Settings',
      general: {
        title: 'General',
        lightTheme: 'Light theme',
        language: 'Language',
      },
      editor: {
        title: 'Editor',
        fontSize: {
          title: 'Font size',
          variants: {
            small: 'small',
            normal: 'normal',
            large: 'large',
            huge: 'huge',
          },
        },
        indentSize: {
          title: 'Indent size',
        },
      },
    },
  },
  console: {
    title: 'Console',
  },
};

export default english;
