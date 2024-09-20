
import { ICard } from '../types/ICard.tsx';

interface IState {
  items: ICard[];
}

interface IAction {
  type: string;
  payload?: ICard | ICard[];
}

export const initialState: IState = {
  items: [],
};

export const itemsReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return { ...state, items: action.payload as ICard[] };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload as ICard] };
    default:
      return state;
  }
};
