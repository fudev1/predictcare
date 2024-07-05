// 💡 Contexte de gestion des informations d'authentification
// 💡 Utiliser le hook useState pour stocker les valeurs des champs de saisie
// 💡 Utiliser le hook useContext pour accéder aux valeurs stockées dans le contexte
// 💡 Utiliser le hook useEffect pour exécuter des actions lorsque les valeurs sont modifiées
// 💡 Utiliser le hook useCallback pour stocker des fonctions de gestion des événements
// --------------------------------------------------------------------------------------

import { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
