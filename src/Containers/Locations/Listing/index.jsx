import { Table} from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import * as constants from "../constants"
import locationsSaga from "../saga"
import { makeSelectLocation } from '../selector';
import * as actions from "../slice"
import locationsSlice from "../slice"
import { columns } from './columns';
  const stateSelector = createStructuredSelector({
    locationsData: makeSelectLocation(),
  });

export default function LocationsListing() {
    useInjectReducer({ key: constants.NAME_SPACE, reducer: locationsSlice });
    useInjectSaga({ key: constants.NAME_SPACE, saga: locationsSaga });
    const dispatch = useDispatch();
    const { locationsData} = useSelector(stateSelector);
    useEffect(() => {
        dispatch(actions.getLocationsRequest())
    },[]);  
    return (
        <Table columns={columns} dataSource={locationsData.locationsData} />
    )
}
