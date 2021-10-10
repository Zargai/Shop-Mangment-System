import React from 'react'
import { Progress } from 'antd';

function Charts() {
    return (
        <div class="main-content mt-4">
      
                <div class="container-fluid">
                    <h2 class="mb-2 text-white">Statistics Detail</h2>
                    <div class="header-body mt-3">
                    <Progress type="circle" style={{margin:'0px 10px'}} strokeColor="red" percent={75} />
                    <Progress type="circle" style={{ margin: '0px 10px' }} strokeColor="green" percent={40} />
                    <Progress type="circle" style={{ margin: '0px 10px' }}  strokeColor="yellow" percent={80} />
                    <Progress type="circle" style={{ margin: '0px 10px' }} strokeColor="blue" percent={90} />
                <div className='my-3'>
                        <Progress percent={30} strokeColor="red" />
                        <Progress percent={50} strokeColor="green" />
                        <Progress percent={70} strokeColor="yellow" />
                        <Progress percent={100} strokeColor="blue"/>
                        

                </div>
                    </div>
                </div>
           
            {/* <!-- Page content --> */}
        </div>
    )
}

export default Charts
