import { useQuery, gql } from '@apollo/client';
import { Container, Typography, CircularProgress } from '@mui/material';

const GET_USER = gql`
  query GetUser {
    getUser(id: "1") {
      id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container>
      <Typography variant="h4">ユーザー情報</Typography>
      <Typography>ID: {data.getUser.id}</Typography>
      <Typography>名前: {data.getUser.name}</Typography>
    </Container>
  );
}

export default App;
