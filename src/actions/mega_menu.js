import * as types from '../constants/MegaMenuActionTypes';
import { request } from '../utils/apiCaller';
import {megaMenu as megaMenuApiUrl} from '../apis/apiURL';

export const fetchMegaMenuData_Request = () => {
  return dispatch => request(megaMenuApiUrl, {method: 'GET'}).then(res => {
    dispatch(fetchMegaMenuData(res));
  })
}

export const fetchMegaMenuData = megaMenuData => ({
  type: types.FETCH_MEGAMENU_DATA, megaMenuData
})