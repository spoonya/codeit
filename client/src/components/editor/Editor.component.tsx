import Editor, { Monaco } from '@monaco-editor/react';
import React, { MutableRefObject } from 'react';
import { emmetCSS, emmetHTML } from 'emmet-monaco-es';

import { themeDark, themeLight, settings } from '../../constants';
import { EditorWrapper, EditorHeader, EditorLang } from './styles/editor.style';
import { getStorage, parseBooleanString } from '../../helpers';

interface CodeEditorProps {
  language: string;
  code: string;
  onChanged: (val: string | undefined) => void;
  langLabel: string;
}

export const editorRefArray: Array<MutableRefObject<any>> = [];

export function CodeEditor(props: CodeEditorProps) {
  const { language, langLabel, code, onChanged } = props;

  const editorRef: MutableRefObject<any> = React.useRef(null);

  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.editor.defineTheme(settings.theme.values.dark, {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': `${themeDark.background.primary}`,
        'editor.lineHighlightBackground': `${themeDark.editor.line}`,
        'dropdown.background': `${themeDark.background.secondary}`,
        'editorWidget.background': `${themeDark.background.primary}`,
      },
    });

    monaco.editor.defineTheme(settings.theme.values.light, {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': `${themeLight.background.primary}`,
        'editor.lineHighlightBackground': `${themeLight.editor.line}`,
        'editorLineNumber.foreground': `${themeLight.editor.lineNum}`,
        'editorCursor.foreground': `${themeLight.text.secondary}`,
        'dropdown.background': `${themeLight.background.secondary}`,
        'editorWidget.background': `${themeLight.background.secondary}`,
      },
    });
  };

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    emmetHTML(monaco);
    emmetCSS(monaco);

    editorRef.current = editor;
    editorRefArray.push(editorRef.current);
  };

  const handleChange = (value: string | undefined) => {
    onChanged(value);
  };

  return (
    <EditorWrapper>
      <EditorHeader>
        <EditorLang>{langLabel}</EditorLang>
      </EditorHeader>
      <Editor
        language={language}
        value={code}
        onChange={handleChange}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        theme={
          getStorage(settings.theme.storage) === settings.theme.values.light
            ? settings.theme.values.light
            : settings.theme.values.dark
        }
        options={{
          minimap: {
            enabled: false,
          },
          tabSize: +getStorage(settings.indentSize.storage) || settings.indentSize.defaultValue,
          fontSize: +getStorage(settings.fontSize.storage) || settings.fontSize.defaultValue,
          insertSpaces: getStorage(settings.indentType.storage)
            ? parseBooleanString(getStorage(settings.indentType.storage))
            : settings.indentType.defaultValue,
          wordWrap: 'on',
          wordWrapColumn: 80,
          wrappingIndent: 'same',
          detectIndentation: false,
          formatOnPaste: true,
          formatOnType: true,
          fixedOverflowWidgets: true,
          renderWhitespace: 'all',
          autoIndent: 'none',
        }}
      />
    </EditorWrapper>
  );
}
