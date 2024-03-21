import { EllipsisOutlined, WarningTwoTone } from "@ant-design/icons";
import { Dropdown, MenuProps, Modal } from "antd";
import { Key } from "react";
import { useState } from "react";
import EditField from "./field-management/EditField";
import { Field } from "../../models/project";

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
  record: Field;
};

export function CustomFieldDropdown({
  items,
  record,
}: CustomDropdownProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [modal, contextHolder] = Modal.useModal();

  const openEditModal = () => {
    setModalData(record.label);
    setModalOpen(true);
  };

  const onMenuClick: MenuProps["onClick"] = (e) => {
    const { key } = e;
    console.log(key);
    switch (key) {
      case "edit": {
        openEditModal();
        break;
      }
      case "delete": {
        modal.confirm({
            title: "Lưu ý",
            icon: <WarningTwoTone twoToneColor="red" />,
            content: <div>Bạn muốn xóa {record.label}</div>,
            okText: "Đồng ý",
            okType: "danger",
            cancelText: "Hủy",
            onOk() {
              console.log(`${key}: ${record.value}`);
            },
            onCancel() {},
          });
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
          })),
          onClick: (e) => onMenuClick(e),
        }}
        placement="bottomLeft"
        trigger={["click"]}
      >
        <EllipsisOutlined />
      </Dropdown>
      {contextHolder}
      {modalOpen && (
        <EditField
          label={modalData}
          onCancel={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
