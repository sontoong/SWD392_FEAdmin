import { CustomFormModal } from "../../modal/modal";
import { Form } from "antd";
import { DefaultForm } from "../../form/form";
import { FormInput } from "../../input/inputs";
import { FieldForm } from "../../../models/project";
import { useState } from "react";
import { skills } from "../../../../constants/skill";
import { SelectMultiple } from "../../select/select";

export default function EditField({ label, onCancel }: { label: string; onCancel: () => void }) {
    const [form] = Form.useForm();
  const [visible, setVisible] = useState(true); // Control modal visibility

  const handleCancel = () => {
    setVisible(false); // Close modal
    onCancel(); // Trigger onCancel function passed from parent
  };

  const handleSubmit = async (values: any) => {
    console.log("Received values of form: ", values);
    setVisible(false); // Close modal
    onCancel(); // Trigger onCancel function passed from parent
  };

  const skillLabels = skills.map(skill => skill.label);

  const initialValues: FieldForm = {
    label: label,
    skills: skillLabels,
  };

  return (
    <CustomFormModal
      title="Chỉnh sửa ngành"
      open={visible}
      onCancel={handleCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            handleSubmit(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <DefaultForm
        form={form}
        name="EditField"
        initialValues={initialValues}
      >
        <Form.Item
          name="label"
          label="Ngành"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <FormInput />
        </Form.Item>
        <Form.Item
                name="skills"
                label="Kỹ năng"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn kỹ năng",
                  },
                ]}
              >
                <SelectMultiple options={skills} />
            </Form.Item>
      </DefaultForm>
    </CustomFormModal>
  );
}
