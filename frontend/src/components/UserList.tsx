import { useQuery } from '@apollo/client';
import { Container, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { GET_USERS, GET_USER } from '../graphql/queries';

export function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

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
    </Container>
  );
}

