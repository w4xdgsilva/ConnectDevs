import { ProfileProvider } from './ProfileContext/ProfileContext';
import { iDefaultProviderProps } from './UserContext/@types';
import { UserProvider } from './UserContext/UserContext';

const Providers = ({ children }: iDefaultProviderProps) => (
  <UserProvider>
    <ProfileProvider>{children}</ProfileProvider>
  </UserProvider>
);

export default Providers;
