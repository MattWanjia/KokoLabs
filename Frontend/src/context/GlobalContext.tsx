// context/GlobalContext.tsx

import { fetchCategories } from '@/api';
import { createContext, FC, useContext, useEffect, useState } from 'react';

interface GlobalContextType {
  categories: any[]; // Adjust the type according to your category data structure
  setCategories: (categories: string[]) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: FC = ({ children }) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Fetch categories and set initial state
    const fetchCats = async () => {
      try {

        const response = await fetchCategories()

        console.log(response)

        //const response = await fetch('YOUR_API_ENDPOINT_FOR_CATEGORIES');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        //const data = await response.json();
        setCategories(response); // Assuming data is an array of strings
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCats();
  }, []);

  return (
    <GlobalContext.Provider value={{ categories, setCategories }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalContext;
