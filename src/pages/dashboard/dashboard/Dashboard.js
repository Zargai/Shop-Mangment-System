import { message } from 'antd';
import { useEffect, useState } from "react";
import { Admin } from '../../../services/api'
import Statistics from './Statistics';
import Charts from './Charts';
import './Dashboard.css'
import Users from './Users';



function Dashboard() {


  const [statistics, setStatistics] = useState();
  const [mounted, setMounted] = useState(true);


  const getStatistics = async () => {
    try {

      const response = await Admin.getStatistics();
      const newResponse = response.data;
      console.log("newResponse", newResponse);
      setStatistics(newResponse);

    } catch (error) {
      message.error(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (mounted === true) {
      getStatistics();
      console.log('statis', statistics);
    }
    return () => {
      setMounted(false);
    };
  }, [setMounted]);


  return (

    <>
      <body class="bg-gradient-primary">
        <Statistics />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-7 text-center'>
              <Charts />
            </div>
            <div className='col-5'>
              <Users/>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Dashboard;
