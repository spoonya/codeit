import styled from 'styled-components/macro';

export const EditorWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  max-height: 100%;
`;

export const EditorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const EditorLang = styled.p`
  text-transform: uppercase;
`;
