import React from 'react';
import {Card} from 'antd';

function MovieCard() {
    const {Meta} = Card;
    return (
        <div>
            <Card hoverable
                style={
                    {width: 250}
                }
                cover={
                    <img
                alt="example"
                src="https://pbs.twimg.com/media/E4LSNucVEAY-lI2.jpg"/>
            }>
                <Meta title="Venom : Let There Be Carnage" description="2 HR 30 MINS"/>
            </Card>
        </div>
    );
}

export default MovieCard;
