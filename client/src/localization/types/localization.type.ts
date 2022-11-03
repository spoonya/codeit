export default interface Localization {
  header: {
    signIn: string;
    run: string;
    projectName: {
      alert: string;
    };
  };
  form: {
    signIn: string;
    signUp: string;
    signInBtn: string;
    signUpBtn: string;
    username: string;
    password: string;
    email: string;
    errors: {
      emptyPassword: string;
      invalidPassword: string;
      emptyEmail: string;
      invalidEmail: string;
      emptyUsername: string;
      invalidUsername: string;
    };
  };
  tooltips: {
    sidebar: {
      share: string;
      settings: string;
    };
    header: {
      projectName: {
        edit: string;
        save: string;
      };
    };
  };
  sidebar: {
    share: {
      title: string;
      label: string;
      button: string;
      alert: string;
    };
    settings: {
      title: string;
      general: {
        title: string;
        lightTheme: string;
        language: string;
        layout: {
          title: string;
          values: {
            vertical: string;
            horizontal: string;
          };
        };
      };
      editor: {
        title: string;
        autorun: string;
        fontSize: {
          title: string;
          values: {
            small: string;
            normal: string;
            large: string;
            huge: string;
          };
        };
        indentSize: {
          title: string;
        };
        indentType: {
          title: string;
          values: {
            tabs: string;
            spaces: string;
          };
        };
      };
    };
  };
  console: {
    title: string;
    clear: string;
  };
}
