import styled from '@emotion/styled';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import DropDown from './components/DropDown';
import Editor from './components/Editor';

import { EditorTempExistHeader, EditorTempNotExistHeader } from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';

const PostPage = () => {
  // 에디터 제목, 내용 저장 함수
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // console.log(title);
  // console.log(content);

  // 모임 ID url에서 받아오기
  const { groupId } = useParams();

  // 임시저장 값 여부 확인

  // 헤더 조건부 렌더링 (임시값)
  // 임시저장 값 있는지 확인 api
  const tempSaveExist = false;

  // 최초 저장
  const saveHandler = () => {
    // request parameter
    // moimID
    // topicId : 글감주제 드롭다운에서 가져오기
    // anonymous : 필명/익명 드롭다운에서 가져오기
  };

  // 임시 저장 글 -> 저장하기
  const tempExistSaveHandler = () => {};

  // 임시 저장
  const tempSaveHandler = () => {};

  return (
    <PostPageWrapper>
      {tempSaveExist ? (
        <EditorTempExistHeader onClickSubmit={tempExistSaveHandler} />
      ) : (
        <EditorTempNotExistHeader onClickTempSave={tempSaveHandler} onClickSubmit={saveHandler} />
      )}
      <Spacing marginBottom="3.4" />
      <DropDown />
      <Spacing marginBottom="2.4" />
      <Editor saveTitle={setTitle} saveContent={setContent} />
    </PostPageWrapper>
  );
};

export default PostPage;

const PostPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
