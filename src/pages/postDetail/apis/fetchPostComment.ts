import { devClient } from '../../../utils/apis/axios';

interface PostCommentResponseType {
  status: number;
  message: string;
  data: null;
}

const fetchPostComment = async (postId: string, comment: string, isAnonymous: boolean) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await devClient.post<PostCommentResponseType>(
      `/api/post/${postId}/comment`,
      {
        content: comment,
        isAnonymous: isAnonymous,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.error();
  }
};

export default fetchPostComment;
