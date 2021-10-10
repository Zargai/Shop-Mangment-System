import React, { useEffect } from 'react'
import { List, message, Avatar, Spin } from 'antd';


function Users() {
    const UserRecord = [
        {id:1, name: "Muhammad Ali", email: "ali@gmail.com" },
        { id: 2, name: "Tayyab Raza", email: "tabi@gmail.com" },
        { id: 3, name: "Shoaib Imran", email: "shoaib@gmail.com" }
    ]
    useEffect(() => {
       console.log("hit")
    });
   
    return (
        <div class="main-content  mt-4">

            <div class="container-fluid">
                <h2 class="mb-2 text-white text-center">Users</h2>
                <div class="header-body mt-1 ">
                    <div class="row">
                        {UserRecord ?
                            (
                                <><div class="col-xl-12 col-lg-12 my-2">
                                    <div class="card card-stats mb-4 mb-xl-0">
                                        <div class="card-body">
                                    <div className="demo-infinite-container">
                                       
                                            <List
                                                dataSource={UserRecord}
                                                renderItem={item => (
                                                    <List.Item >
                                                        <List.Item.Meta
                                                            avatar={
                                                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                                            }
                                                            title={<h6 >{item.name}</h6>}
                                                            description={item.email}
                                                        />
                                                        <div>Content</div>
                                                    </List.Item>
                                                )}
                                            >
                                              
                                            </List>
                                       
                                    </div>  
                                        </div>
                                    </div>
                                </div>
                              </>) : (
                                <>
                                    <div class="col-xl-12 col-lg-12 my-2">
                                        <div class="card card-stats mb-4 mb-xl-0">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col">
                                                        <h5 class="card-title text-uppercase text-muted mb-0"></h5>
                                                        <span class="h2 font-weight-bold mb-0">No User Found</span>
                                                    </div>
                                                    <div class="col-auto">
                                                        <div class="icon icon-shape bg-danger text-white rounded-circle shadow p-2">
                                                            <i class="fas fa-users fa-2x "></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }



                    </div>
                </div>
            </div>


        </div>
    )
}

export default Users
