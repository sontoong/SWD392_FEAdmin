import { Table, TableProps } from "antd";
import { fields } from "../../../../constants/testData"; 
import { CustomDropdownProps } from "../fieldDropDown"; 
import { CustomFieldDropdown } from "../fieldDropDown";
import CustomTag from "../../ui/tag"; 
import { skills } from "../../../../constants/skill";

export default function FieldTable(){
    const data = fields.map((field) => (
        {
          ...field,
          skillTitles: skills.map((skill) => (
            skill.label
          ))
        }
    ))
    
      const dropdownItems: CustomDropdownProps["items"] = [
        { key: "edit", label: "Chỉnh sửa ngành" },
        {
          key: "delete",
          label: "Xóa ngành", danger: true 
        },
      ];
    
      const columns: TableProps["columns"] = [
        {
          title: "Tên Ngành",
          dataIndex: "label",
          key: "label",
          width: "20%"
        },
        {
          title: "Kỹ năng",
          dataIndex: "skillTitles",
          key: "skillTitles",
          render: (skillTitles) => (
            <div>
              {skillTitles.map((title: string, index: any) => (
                <CustomTag key={index}>{title}</CustomTag>
              ))}
            </div>
          ),
          width:'50%'
        },
        {
            title: "Actions",
            key: "actions",
            align: "center",
            render: (_, record) => (
              <CustomFieldDropdown
                items={dropdownItems}
                record={record}
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