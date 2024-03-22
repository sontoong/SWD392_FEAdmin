import { Card, Space } from "antd";
import Chart from "../components/ui-admin/dashboard/Chart";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hook";
import { fetchCandidates } from "../redux/slice/candidateSlice";
import { fetchEnterprises } from "../redux/slice/enterpise";

export default function Dashboard() {
  useSetHeaderTitle([
    {
      title: `Dashboard`,
      path: "/dashboard",
    },
  ]);
  const dispatch = useAppDispatch();
  const [candidates, setCandidates] = useState(0);
  const [enterprises, setEnterprises] = useState(0);
  const [projects, setProjects] = useState(0);
  console.log(enterprises);

  useEffect(() => {
    const third = setInterval(() => {
      const candidateFetch = async () =>
        await dispatch(fetchCandidates()).unwrap();
      const freelancerFetch = async () =>
        await dispatch(fetchEnterprises()).unwrap();

      Promise.all([candidateFetch(), freelancerFetch()]).then((values: any) => {
        setCandidates(values[0].length);
        setEnterprises(values[1].length);
      });
    }, 100000);
    return () => {
      clearInterval(third);
    };
  }, [dispatch]);

  return (
    <div className="mt-5 flex flex-col p-10">
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
      <Space direction="horizontal" size={100} className="flex justify-between">
        <Card
          title="Tổng Freelancer"
          style={{ width: 300 }}
          className="flex flex-col items-center justify-center"
        >
          <p className="text-2xl font-bold">{candidates}</p>
        </Card>
        <Card
          title="Tổng nhà tuyển dụng "
          style={{ width: 300 }}
          className="flex flex-col items-center justify-center"
        >
          <p className="text-2xl font-bold">{enterprises}</p>
        </Card>
        <Card
          title="Tổng bài đăng/tháng "
          style={{ width: 300 }}
          className="flex flex-col items-center justify-center"
        >
          <p className="text-2xl font-bold">{projects}</p>
        </Card>
      </Space>
      <div className="mt-20 flex">
        <div className="w-[100%]">
          <Chart />
        </div>
      </div>
    </div>
  );
}
