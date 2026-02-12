import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box className={styles.appRoot}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div">
            MUI Starter
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className={styles.content} maxWidth="md">
        <Stack spacing={3} alignItems="center">
          <Box textAlign="center">
            <Typography variant="h3" component="h1" gutterBottom>
              Material UI App
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              This UI is fully powered by MUI components and Emotion.
            </Typography>
          </Box>

          <Card className={styles.card} variant="outlined">
            <CardContent>
              <Stack spacing={2} alignItems="center">
                <Typography variant="h5" component="h2">
                  Counter
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Current count: {count}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Button
                    variant="contained"
                    onClick={() => setCount((current) => current + 1)}
                  >
                    Increase
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setCount(0)}
                  >
                    Reset
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          <Divider flexItem />

          <Stack spacing={1} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Explore the MUI documentation to customize components and themes.
            </Typography>
            <Link href="https://mui.com/" target="_blank" rel="noreferrer">
              Visit MUI Docs
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
