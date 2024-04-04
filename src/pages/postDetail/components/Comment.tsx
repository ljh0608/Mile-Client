import styled from '@emotion/styled';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CommentItem from './CommentItem';

import { useGetCommentList, usePostComment } from '../hooks/queries';

import { EditorCatIc } from '../../../assets/svgs';
import Spacing from '../../../components/commons/Spacing';

interface CommentPropTypes {
  postId: string | undefined;
}

const Comment = (props: CommentPropTypes) => {
  const { postId } = props;
  const [comment, setComment] = useState('');
  const { commentListData, error } = useGetCommentList(postId || '');
  const { postComment } = usePostComment(postId || '');
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!token) {
      navigate('/login');
    } else {
      if (comment.trim() !== '') {
        postComment(comment); //댓글 등록
        setComment(''); // 댓글 등록 후 댓글 초기화
      }
    }
  };

  interface CommentListPropTypes {
    commentId: string;
    name: string;
    moimName: string;
    content: string;
    isMyComment: boolean;
  }

  return error?.message == '403' ? (
    <div></div>
  ) : (
    <CommentWrapper>
      <CommentPostWrapper>
        <CommentLayout>
          <CommentForm
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 남겨주세요."
          />
          <CheckboxLayout>
            <Checkbox /> 익명
          </CheckboxLayout>
        </CommentLayout>

        <CommentPostBtn $isComment={comment} onClick={handleCommentSubmit}>
          등록
        </CommentPostBtn>
      </CommentPostWrapper>
      <Spacing marginBottom="2" />
      {commentListData?.length == 0 ? (
        <>
          <Spacing marginBottom="4" />
          <NoCommentText>아직 댓글이 없어요</NoCommentText>
          <EditorCatIc />
        </>
      ) : (
        commentListData?.map((data: CommentListPropTypes) => (
          <CommentItem
            key={data.commentId}
            name={data.name}
            moimName={data.moimName}
            content={data.content}
            isMyComment={data.isMyComment}
            postId={postId}
            commentId={data.commentId}
          ></CommentItem>
        ))
      )}
    </CommentWrapper>
  );
};

export default Comment;

const CheckboxLayout = styled.div`
  display: flex;
  gap: 0.4rem;
  width: 4.4rem;

  ${({ theme }) => theme.fonts.body5};
  color: ${({ theme }) => theme.colors.gray70};
`;

const Checkbox = styled.button`
  width: 1.5rem;
  height: 1.5rem;

  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 2px;
`;

const CommentLayout = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 69.6rem;
  height: 4rem;
  padding: 1rem 1.2rem;

  background-color: ${({ theme }) => theme.colors.gray5};
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 6px;
`;

const CommentForm = styled.input`
  width: 62.1rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray30};
  }
  color: ${({ theme }) => theme.colors.gray100};

  background-color: ${({ theme }) => theme.colors.gray5};
  border: none;

  ${({ theme }) => theme.fonts.button2};
`;

const CommentPostBtn = styled.button<{ $isComment: string }>`
  padding: 1rem 1.6rem;

  color: ${({ $isComment, theme }) =>
    $isComment === '' ? theme.colors.gray70 : theme.colors.white};

  background-color: ${({ $isComment, theme }) =>
    $isComment === '' ? theme.colors.gray10 : theme.colors.mainViolet};
  border-radius: 8px;

  ${({ theme }) => theme.fonts.button3};

  :hover {
    color: ${({ $isComment, theme }) =>
      $isComment === '' ? theme.colors.gray70 : theme.colors.mainViolet};

    background-color: ${({ $isComment, theme }) =>
      $isComment === '' ? theme.colors.gray10 : theme.colors.mileViolet};
  }
`;

const CommentPostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 2.8rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;

const NoCommentText = styled.p`
  margin-bottom: 3rem;

  color: ${({ theme }) => theme.colors.gray50};

  ${({ theme }) => theme.fonts.title8};
`;
