import { Table, TableProps } from "antd";
import { CandidateDetail, UserDetailTable } from "../models/user";
import {
  CustomDropdown,
  CustomDropdownProps,
} from "../components/ui-admin/dropdown";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import { Key, useEffect, useState } from "react";
import { generateVerifyMsg } from "../utils/generators";
import { formatUnixToLocal } from "../utils/utils";
import { useAppDispatch } from "../redux/hook";
import { fetchCandidates } from "../redux/slice/candidateSlice";

export default function UserManage() {
  useSetHeaderTitle([
    {
      title: `Quản lý tài khoản`,
      path: "/users",
    },
  ]);
  const dispatch = useAppDispatch();
  const [candidates, setCandidates] = useState<CandidateDetail[]>([]);

  useEffect(() => {
    async function fetch() {
      const res = await dispatch(fetchCandidates()).unwrap();
      if (res) {
        setCandidates(res);
      }
    }
    fetch();
  }, [dispatch]);

  const dropdownItems: CustomDropdownProps["items"] = [
    {
      key: "information",
      label: "Xem thông tin tài khoản",
    },
    {
      key: "activate",
      label: "Kích hoạt tài khoản",
    },
    { key: "unactivate", label: "Hủy kích hoạt tài khoản" },
    { key: "terminate", label: "Cấm tài khoản", danger: true },
    { key: "edit", label: "Chỉnh sửa tài khoản" },
  ];

  const checkDisabled = (
    key: Key | undefined,
    record: UserDetailTable,
  ): boolean => {
    const { verified } = record;
    switch (key) {
      case "activate": {
        return verified === true;
      }
      case "unactivate": {
        return verified === false;
      }
      default:
        return false;
    }
  };

  const data: UserDetailTable[] = candidates.map((candidate, index) => {
    return {
      ...candidate,
      key: `${index + 1}`,
      dobString: formatUnixToLocal(candidate.dob || -1),
      status: generateVerifyMsg(candidate.verified),
    };
  });

  const columns: TableProps<UserDetailTable>["columns"] = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Họ Và Tên",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Ngày sinh",
      dataIndex: "dobString",
      key: "dobString",
    },
    {
      title: "Loại tài khoản",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <CustomDropdown
          items={dropdownItems}
          record={record}
          checkDisabled={checkDisabled}
        />
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ position: ["bottomCenter"] }}
    />
  );
}
