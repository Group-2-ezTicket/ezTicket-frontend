import React, {useState} from 'react';
import {Layout} from 'antd';
import { Input, AutoComplete, Button, renderTitle, renderItem } from 'antd';
import { PropertySafetyFilled, UserOutlined } from '@ant-design/icons';


function HomeSearch(props){
    
    const [input, setInput] = useState("");
    
    const options = [
       { id: '1', value: 'SM North - Cinema 1' }, 
       { id: '2', value: 'SM North - Cinema 2' },
       { id: '3', value: 'Trinoma - Cinema 1' },
       { id: '4', value: 'Trinoma - Cinema 2' },
      ];


    const onChangeHandler = (data) =>{

        props.updateCinemaName(data);
        setInput(data);
    }
    
    return(
        
        <div>
            <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                style={{
                width: '50%',
                padding: '20px'
                }}
                onChange={onChangeHandler}
                options={options} value={input}>
                
                <Input.Search size="large" placeholder="input here"  />
            </AutoComplete>
            
        </div>
    )
};



export default HomeSearch;