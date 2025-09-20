import { useQuery } from '@apollo/client';
import { Container, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { GET_USERS, GET_USER, GET_TASK } from '../graphql/queries';

export function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  const { data: taskData, loading: taskLoading, error: taskError } = useQuery(GET_TASK);

  if (loading || taskLoading) return <CircularProgress />;
  if (error || taskError) return <Typography color="error">Fail to query</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>ユーザー一覧</Typography>
      <List>
        {data.getUsers.map((user: any) => (
            <ListItem key = {user.id}>
                <ListItemText
                   primary={user.id}
                   secondary={user.name}
                />
            </ListItem>
        ))}
      </List>
      {/* <Typography variant="h4">ユーザー情報</Typography>
      <Typography>ID: {data.getUser.id}</Typography>
      <Typography>名前: {data.getUser.name}</Typography> */}
      <Typography variant="h5" gutterBottom>タスク情報</Typography>
      {taskData && taskData.getTask ? (
        <div>
          <Typography>ID: {taskData.getTask.taskId}</Typography>
          <Typography>タイトル: {taskData.getTask.title}</Typography>
          <Typography>説明: {taskData.getTask.description}</Typography>
          <Typography>完了: {taskData.getTask.completed ? "済" : "未"}</Typography>
        </div>
      ) : (
        <Typography>タスク情報がありません</Typography>
      )}
    </Container>
  );
}

