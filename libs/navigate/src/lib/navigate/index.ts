import { useNavigate as useNavigateRouter } from 'react-router-dom';

export const useNavigate = () => {
  const navigateRouter = useNavigateRouter();
  const navigate = (name: string, path: string) => {
    navigateRouter(path);
  };
  return {
    navigate,
  };
};
