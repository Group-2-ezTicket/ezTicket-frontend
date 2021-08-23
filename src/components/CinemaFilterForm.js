import React from 'react';
import {Input} from 'antd';
import '../styles/CinemaFilterForm.css';
const {Search} = Input;

function CinemaFilterForm() {
    const onSearch = value => console.log(value);
    return (
        <div className="cinemaFilter">
            <Search placeholder="Search for Cinemas" onSearch={onSearch} enterButton />
        </div>
    );
}

export default CinemaFilterForm;