import Localization from './types/localization.type';

const english: Localization = {
  header: {
    signIn: 'Sign In',
  },
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
        layout: {
          title: 'Layout',
          values: {
            vertical: 'vertically',
            horizontal: 'horizontally',
          },
        },
      },
      editor: {
        title: 'Editor',
        fontSize: {
          title: 'Font size',
          values: {
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
    clear: 'Clear',
  },
};

export default english;
