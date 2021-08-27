import React, { useState, useEffect } from 'react';
import { Input, AutoComplete } from 'antd';
import { getCinemas } from "../apis/cinema";
import { useDispatch, useSelector } from 'react-redux';
import { AddCinemas, selectCinemas } from '../reducers/CinemaSlice';

function HomeSearch(props) {
    const cinemaList = useSelector(selectCinemas);
    const dispatch = useDispatch();

    useEffect(() => {
        getCinemas().then((response) => {
            dispatch(AddCinemas(response.data))
        })
    }, [dispatch])

    const [input, setInput] = useState("");

    const onChangeHandler = (data) => {
        props.updateCinemaName(data);
        setInput(data);
    }

    return (

        <div>
            <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                style={{
                    width: '50%',
                    padding: '20px'
                }}
                onChange={onChangeHandler}
                options={cinemaList} value={input}>

                <Input size="large" placeholder="Choose Cinema" />
            </AutoComplete>

        </div>
    )
};



export default HomeSearch;