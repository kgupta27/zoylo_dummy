import { FORCE_UPDATE } from './constant';

export const forceUpdate = (data) => (dispatch) => {
    const fetchData = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    var url = 'https://storm-devdb.zoylo.com/zoylogateway-0.0.1-SNAPSHOT/zoylodoctor/zoylodoctor-0.0.1-SNAPSHOT/api/doctor-details/filters'
    let check = fetch(url, fetchData)

    dispatch({
        type: FORCE_UPDATE,
        data: check
    })
};