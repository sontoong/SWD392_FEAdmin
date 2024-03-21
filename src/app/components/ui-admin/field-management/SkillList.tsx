import { Modal, Table, TableProps } from "antd";
import { OutlineButton, PrimaryButton } from "../../button/buttons";
import { useState } from "react";
import { CustomDropdownProps } from "../dropdown";
import { skills } from "../../../../constants/skill";
import {Typography} from "antd";
import CreateNewSkill from "./CreateNewField";
import { CustomSkillDropdown } from "../skillDropdown";

export default function SkillList(){
    const [open, setOpen] = useState(false);
    const { Title } = Typography;
  
    const handleOk = () => {
        setOpen(false);
    };
  
    const handleCancel = () => {
        setOpen(false);
    };
    const data = skills
    
      const dropdownItems: CustomDropdownProps["items"] = [
        { key: "edit", label: "Chỉnh sửa kỹ năng" },
        {
          key: "delete",
          label: "Xóa kỹ năng", danger: true 
        },
      ];
    
      const columns: TableProps["columns"] = [
        {
          title: "Kỹ năng",
          dataIndex: "label",
          key: "label",
          width: "20%"
        },
        {
            title: "Actions",
            key: "actions",
            align: "center",
            render: (_, record) => (
              <CustomSkillDropdown
                items={dropdownItems}
                record={record}
              />
            ),
          },
      ];

    return (
      <>
        <PrimaryButton onClick={() => setOpen(true)}>Danh sách kỹ năng</PrimaryButton>
        <Modal
            open={open} onOk={handleOk} onCancel={handleCancel}
            footer={[
                <OutlineButton key="cancel" onClick={handleCancel}>
                  Hủy
                </OutlineButton>,
                <PrimaryButton key="sumbit" onClick={handleOk}>
                  Lưu
                </PrimaryButton>,
              ]}
              title={
                <Title
                  level={4}
                  style={{
                    margin: 0,
                    textTransform: "uppercase",
                    color: "#74BA7B",
                  }}
                >
                  Danh sách kỹ năng
                </Title>
              }
        >
        <CreateNewSkill/>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
        />
        </Modal>
      </>
    ); 
}