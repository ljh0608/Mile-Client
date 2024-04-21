import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchAdminTopic } from '../apis/fetchAdminData';
import fetchDeleteMember from '../apis/fetchDeleteMember';
import fetchMemberInfo from '../apis/fetchMemberInfo';

export const QUERY_KEY_ADMIN = {
  useMemberInfo: 'fetchMemberInfo',
};

export const useAdminTopic = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['adminTopic'],
    queryFn: () => fetchAdminTopic(),
  });

  const topicCount = data && data.data.topicCount;
  const adminTopicData = data && data.data;

  return { topicCount, adminTopicData, isLoading, isError, error };
};

// 멤버 정보 조회 get api
export const useFetchMemberInfo = (groupId: string, page: number | undefined) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY_ADMIN.useMemberInfo],
    queryFn: () => fetchMemberInfo(groupId || '', page),
  });
  const totalMember = data?.data.writerNameCount;
  const memberData = data?.data;
  const memberListData = data?.data.writerNameList;
  const pageNumber = data?.data.pageNumber;

  return { memberData, memberListData, totalMember, pageNumber, isLoading, page };
};

// 멤버 삭제 api
export const useDeleteMember = () => {
  const queryClient = useQueryClient();
  const data = useMutation({
    mutationKey: [QUERY_KEY_ADMIN.useMemberInfo],
    mutationFn: (writerNameId: number) => fetchDeleteMember(writerNameId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_ADMIN.useMemberInfo] });
    },
  });
  const deleteMember = (writerNameId: number) => {
    data.mutate(writerNameId);
  };

  return { deleteMember };
};
