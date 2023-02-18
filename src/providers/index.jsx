import { FormDataRegisterProvider } from "./FormDataContext/FormDataRegisterContext";
import { FormDataLoginProvider } from "./FormDataContext/FormDataLoginContext";
import { UserContextProvider } from "./UserContext";
import { TechContextProvider } from "./TechContext";

export const Providers = ({ children }) => {
  return (
    <FormDataRegisterProvider>
      <FormDataLoginProvider>
        <UserContextProvider>
          <TechContextProvider>{children}</TechContextProvider>
        </UserContextProvider>
      </FormDataLoginProvider>
    </FormDataRegisterProvider>
  );
};
