import { useCallback, useEffect, useMemo, useState } from 'react';
import { UIModeContext, UI_MODE_STORAGE_KEY } from '@/components/core/uiModeContext';

/**
 * Site-wide presentation mode. "Recruiter mode" flattens the experience:
 * no reveal animations, no custom cursor, no grain, and the homepage swaps
 * the cinematic 3D stage for a clean, scannable hero. Persisted across visits.
 */
export default function UIModeProvider({ children }) {
  const [recruiter, setRecruiterState] = useState(() => {
    try {
      return localStorage.getItem(UI_MODE_STORAGE_KEY) === 'recruiter';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.body.classList.toggle('recruiter-mode', recruiter);
  }, [recruiter]);

  const setRecruiter = useCallback(value => {
    setRecruiterState(value);
    try {
      localStorage.setItem(UI_MODE_STORAGE_KEY, value ? 'recruiter' : 'cinematic');
    } catch {
      /* storage unavailable — mode just won't persist */
    }
  }, []);

  const toggleRecruiter = useCallback(
    () => setRecruiter(!recruiter),
    [recruiter, setRecruiter]
  );

  const value = useMemo(
    () => ({ recruiter, setRecruiter, toggleRecruiter }),
    [recruiter, setRecruiter, toggleRecruiter]
  );
  return <UIModeContext.Provider value={value}>{children}</UIModeContext.Provider>;
}
