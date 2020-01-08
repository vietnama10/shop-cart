import {
  FETCH_MEGAMENU_DATA
} from '../constants/MegaMenuActionTypes';

const initState = {
  data: []
};

const mega_menu = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MEGAMENU_DATA:
      return {...state, data: action.megaMenuData};
    default: 
      return {...state};
  }
}

export default mega_menu