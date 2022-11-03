import Localization from './types/localization.type';

const english: Localization = {
  header: {
    signIn: 'Sign In',
    run: 'Run',
    projectName: {
      alert: 'Project name changed',
    },
  },
  form: {
    signIn: 'Sign In',
    signUp: 'Sign Up',
    signInBtn: 'Sign In',
    signUpBtn: 'Sign Up',
    username: 'Username',
    password: 'Password',
    email: 'E-mail',
    errors: {
      emptyPassword: 'Password cannot be empty',
      invalidPassword: 'At least 6 characters',
      emptyEmail: 'E-mail cannot be empty',
      invalidEmail: 'Invalid e-mail',
      emptyUsername: 'Username cannot be empty',
      invalidUsername: 'At least 2 characters',
    },
  },
  tooltips: {
    sidebar: {
      share: 'Share',
      settings: 'Settings',
    },
    header: {
      projectName: {
        edit: 'Edit name',
        save: 'Save',
      },
    },
  },
  sidebar: {
    share: {
      title: 'Share project',
      label: 'Shareable Link',
      button: 'Copy',
      alert: 'Link copied',
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
        autorun: 'Autorun',
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
        indentType: {
          title: 'Indent type',
          values: {
            spaces: 'spaces',
            tabs: 'tabs',
          },
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
