import { PostProviders } from './PostContext/PostContext';
import { iDefaultProviderProps } from './UserContext/@types';
import { UserProvider } from './UserContext/UserContext';

const Providers = ({ children }: iDefaultProviderProps) => (
  <UserProvider>{children}</UserProvider>
);

export default Providers;
