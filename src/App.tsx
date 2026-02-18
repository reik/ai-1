import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AppBar,
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  TextField,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import styles from "./App.module.css";

const AUTH_STORAGE_KEY = "is_authenticated";
const LOGIN_PATH = "/login";
const DASHBOARD_PATH = "/dashboard";
const PROFILE_PATH = "/profile";
const SETTINGS_PATH = "/settings";

const getCurrentPath = (): string => {
  if (typeof window === "undefined") {
    return LOGIN_PATH;
  }

  if (!window.location.pathname || window.location.pathname === "/") {
    return DASHBOARD_PATH;
  }

  return window.location.pathname;
};

const isProtectedPath = (path: string): boolean => path !== LOGIN_PATH;

const navigate = (path: string, replace = false): void => {
  if (replace) {
    window.history.replaceState({}, "", path);
  } else {
    window.history.pushState({}, "", path);
  }
};

const getStoredAuth = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(AUTH_STORAGE_KEY) === "true";
};

const getPageTitle = (path: string): string => {
  switch (path) {
    case PROFILE_PATH:
      return "Profile";
    case SETTINGS_PATH:
      return "Settings";
    case DASHBOARD_PATH:
      return "Dashboard";
    default:
      return "Not Found";
  }
};

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(getStoredAuth);
  const [currentPath, setCurrentPath] = useState<string>(getCurrentPath);
  const [username, setUsername] = useState<string>("");

  const pageTitle = useMemo(() => getPageTitle(currentPath), [currentPath]);

  const setAuthState = useCallback((authenticated: boolean): void => {
    setIsAuthenticated(authenticated);
    window.sessionStorage.setItem(AUTH_STORAGE_KEY, String(authenticated));
  }, []);

  const handleLogin = useCallback((): void => {
    setAuthState(true);
    navigate(DASHBOARD_PATH);
    setCurrentPath(DASHBOARD_PATH);
  }, [setAuthState]);

  const handleLogout = useCallback((): void => {
    setAuthState(false);
    navigate(LOGIN_PATH, true);
    setCurrentPath(LOGIN_PATH);
  }, [setAuthState]);

  const handlePageNavigation = useCallback((path: string): void => {
    navigate(path);
    setCurrentPath(path);
  }, []);

  useEffect(() => {
    const onPopState = (): void => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  useEffect(() => {
    if (!isAuthenticated && isProtectedPath(currentPath)) {
      navigate(LOGIN_PATH, true);
      setCurrentPath(LOGIN_PATH);
      return;
    }

    if (isAuthenticated && currentPath === LOGIN_PATH) {
      navigate(DASHBOARD_PATH, true);
      setCurrentPath(DASHBOARD_PATH);
    }
  }, [currentPath, isAuthenticated]);

  return (
    <Box className={styles.appRoot}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Authenticated App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className={styles.content} maxWidth="md">
        {!isAuthenticated ? (
          <Card className={styles.card} variant="outlined">
            <CardContent>
              <Stack spacing={3} component="form" noValidate>
                <Box>
                  <Typography variant="h4" component="h1" gutterBottom>
                    Login
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Authenticate to access protected pages.
                  </Typography>
                </Box>
                <TextField
                  label="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoComplete="username"
                  fullWidth
                />
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleLogin}
                  disabled={!username.trim()}
                >
                  Sign in
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ) : (
          <Stack spacing={3} className={styles.protectedStack}>
            <Box className={styles.pageHeader}>
              <Typography variant="h4" component="h1">
                {pageTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You are signed in as {username || "authenticated user"}.
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} role="navigation">
              <Button
                variant="outlined"
                onClick={() => handlePageNavigation(DASHBOARD_PATH)}
              >
                Dashboard
              </Button>
              <Button
                variant="outlined"
                onClick={() => handlePageNavigation(PROFILE_PATH)}
              >
                Profile
              </Button>
              <Button
                variant="outlined"
                onClick={() => handlePageNavigation(SETTINGS_PATH)}
              >
                Settings
              </Button>
            </Stack>

            {pageTitle === "Not Found" ? (
              <Alert severity="warning" role="alert">
                The page does not exist.
              </Alert>
            ) : (
              <Card className={styles.card} variant="outlined">
                <CardContent>
                  <Typography variant="body1">
                    {pageTitle} content is protected and only visible after
                    login.
                  </Typography>
                </CardContent>
              </Card>
            )}

            <Divider />

            <Button color="secondary" variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </Stack>
        )}
      </Container>
    </Box>
  );
};
