import { useNavigation } from '@react-navigation/native';

export const useNavigate = () => {
  const navigateRouter = useNavigation();
  const navigate = (name: string, path: string) => {
    navigateRouter.navigate(name);
  };
  return {
    navigate,
  };
};
