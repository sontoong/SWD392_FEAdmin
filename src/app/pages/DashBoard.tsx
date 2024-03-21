import { Card, Space } from 'antd';
import Chart from '../components/ui-admin/dashboard/Chart';
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";

export default function Dashboard() {

  useSetHeaderTitle([
    {
      title: `Dashboard`,
      path: "/dashboard",
    },
  ]);

  return (
    <div className='mt-5 flex flex-col p-10'>
      {/* <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem component={<Link to="/dashboard/user" />}> Documentation</MenuItem>
          <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
          <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <div>
        <DashboardUser />
      </div> */}
      <Space direction="horizontal" size={100} className='flex justify-between'>
        <Card title="Tổng Freelancer" style={{ width: 300 }} className='flex flex-col justify-center items-center'>
          <p className='font-bold text-2xl'>12</p>
        </Card>
        <Card title="Tổng nhà tuyển dụng " style={{ width: 300 }} className='flex flex-col justify-center items-center'>
          <p className='font-bold text-2xl'>14</p>
        </Card>
        <Card title="Tổng bài đăng/tháng " style={{ width: 300 }} className='flex flex-col justify-center items-center'>
          <p className='font-bold text-2xl'>10</p>
        </Card>
      </Space>
      <div className='flex mt-20'>
        <div className='w-[100%]'>
          <Chart />
        </div>
      </div>
    </div>
  )
}