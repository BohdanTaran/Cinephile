import { createContext } from 'react';
import { IGenre } from '../ui/Genres/model/types';

export const GenresContext = createContext<IGenre[]>([]);
