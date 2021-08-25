import React from 'react';
import { List, Skeleton } from 'antd';

export default function CheckoutSummary() {
    const data = [
        {
          title: 'Movie',
        }
      ];
      
    return (
        <div>
            <div>
                <h1>Reservation Summary</h1>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        title={<h2>{item.title}</h2>}
                        description=""
                        />
                        <Skeleton>
                            <div>
                                Movie: Venom: Let there be carnage
                                Cinema: SM Cinema Tawi Tawi
                                Schedule: 08/23/2021 Monday - 1:00 PM - 3:35 PM
                                Seat Code/s: C3
                                Price: 300
                            </div>
                        </Skeleton>
                    </List.Item>
                    )}
                />
            </div>

        </div>
    )
}
