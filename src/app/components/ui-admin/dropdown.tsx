import {
  EllipsisOutlined,
  ExclamationCircleFilled,
  WarningTwoTone,
} from "@ant-design/icons";
import { Dropdown, MenuProps, Modal } from "antd";
import { UserDetailTable } from "../../models/user";
import { Key } from "react";
import { useNavigate } from "react-router-dom";

export type CustomDropdownProps = {
  items: {
    key: Key;
    label: React.ReactNode;
    disabled?: boolean;
    dashed?: boolean;
    type?: "item" | "divider";
    style?: React.CSSProperties;
    className?: string;
    [key: string]: any;
  }[];
  record: UserDetailTable;
  checkDisabled: (key: Key | undefined, record: UserDetailTable) => boolean;
};

export function CustomDropdown({
  items,
  record,
  checkDisabled,
}: CustomDropdownProps) {
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();

  const onMenuClick: MenuProps["onClick"] = (e) => {
    const { key } = e;
    switch (key) {
      case "information": {
        navigate(`${record.accountId}`);
        break;
      }
      case "activate": {
        modal.confirm({
          title: "Lưu ý",
          icon: <ExclamationCircleFilled />,
          content: <div>Bạn muốn kích hoạt tài khoản {record.username}</div>,
          okText: "Đồng ý",
          okType: "danger",
          cancelText: "Hủy",
          onOk() {
            console.log(`${key}: ${record.username}`);
          },
          onCancel() {},
        });
        break;
      }
      case "unactivate": {
        modal.confirm({
          title: "Lưu ý",
          icon: <ExclamationCircleFilled />,
          content: (
            <div>Bạn muốn hủy kích hoạt tài khoản {record.username}</div>
          ),
          okText: "Đồng ý",
          okType: "danger",
          cancelText: "Hủy",
          onOk() {
            console.log(`${key}: ${record.username}`);
          },
          onCancel() {},
        });
        break;
      }
      case "terminate": {
        modal.confirm({
          title: "Lưu ý",
          icon: <WarningTwoTone twoToneColor="red" />,
          content: <div>Bạn muốn cấm tài khoản {record.username}</div>,
          okText: "Đồng ý",
          okType: "danger",
          cancelText: "Hủy",
          onOk() {
            console.log(`${key}: ${record.username}`);
          },
          onCancel() {},
        });
        break;
      }
      case "edit": {
        navigate(`user/edit/${record.accountId}`);
        break;
      }

      default:
        break;
    }
  };

  return (
    <>
      <Dropdown
        menu={{
          items: items.map((item) => ({
            ...item,
            disabled: checkDisabled(item?.key, record),
          })),
          onClick: (e) => onMenuClick(e),
        }}
        placement="bottomLeft"
        trigger={["click"]}
      >
        <EllipsisOutlined />
      </Dropdown>
      {contextHolder}
    </>
  );
}
