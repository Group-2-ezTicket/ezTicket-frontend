import React from 'react';
import { Input } from 'antd';
import '../styles/CinemaFilterForm.css';
const { Search } = Input;

function CinemaFilterForm(props) {
    const onSearch = value => {
        props.updateCinemaName(value);
    }
    return (
        <div className="cinemaFilter">
            <Search placeholder="Search for Cinemas" onSearch={onSearch} enterButton />
        </div>
    );
}

export default CinemaFilterForm;