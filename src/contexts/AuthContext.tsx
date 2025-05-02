
import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: string;
  email: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // For demo purposes, we'll just simulate a login
    // In a real app, you would validate with a backend
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email && password) {
          const userData = {
            id: "user-" + Math.random().toString(36).substr(2, 9),
            email,
            name: email.split('@')[0],
          };
          
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
          setIsLoading(false);
          resolve();
        } else {
          setIsLoading(false);
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };
  
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    // For demo purposes, we'll just simulate registration
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (name && email && password) {
          const userData = {
            id: "user-" + Math.random().toString(36).substr(2, 9),
            email,
            name,
          };
          
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
          setIsLoading(false);
          resolve();
        } else {
          setIsLoading(false);
          reject(new Error("Invalid registration data"));
        }
      }, 1000);
    });
  };
  
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      isLoading,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
