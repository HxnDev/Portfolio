import { createContext, useContext } from 'react';

export const UI_MODE_STORAGE_KEY = 'ui-mode';

export const UIModeContext = createContext({
  recruiter: false,
  setRecruiter: () => {},
  toggleRecruiter: () => {},
});
export const useUIMode = () => useContext(UIModeContext);
