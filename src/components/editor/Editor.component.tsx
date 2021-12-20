import Editor, { Monaco } from '@monaco-editor/react';
import React from 'react';
import { emmetCSS, emmetHTML } from 'emmet-monaco-es';

import { themeDark, themeLight } from '../../constants/theme.constant';
import { EditorWrapper, EditorHeader, EditorLang } from './styles/editor.style';

interface CodeEditorProps {
  language: string;
  code: string;
  onChanged: any;
  langLabel: string;
}

export default function CodeEditor(props: CodeEditorProps) {
  const { language, langLabel, code, onChanged } = props;

  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.editor.defineTheme('dark', {
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

    monaco.editor.defineTheme('light', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': `${themeLight.background.primary}`,
        'editor.lineHighlightBackground': `${themeLight.editor.line}`,
        'editorLineNumber.foreground': `${themeLight.editor.lineNum}`,
        'editorCursor.foreground': `${themeLight.background.primary}`,
        'dropdown.background': `${themeLight.background.secondary}`,
        'editorWidget.background': `${themeLight.background.secondary}`,
      },
    });
  };

  const handleEditorDidMount = (editor: unknown, monaco: Monaco) => {
    emmetHTML(monaco);
    emmetCSS(monaco);
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
        theme="dark"
        options={{
          minimap: {
            enabled: false,
          },
          tabSize: 2,
          fontSize: 14,
          wordWrap: 'bounded',
          wordWrapColumn: 80,
          formatOnPaste: true,
          formatOnType: true,
        }}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
      />
    </EditorWrapper>
  );
}
