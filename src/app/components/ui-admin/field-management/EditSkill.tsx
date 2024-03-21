import { CustomFormModal } from "../../modal/modal";
import { useState } from "react";
import { Form } from "antd";
import { DefaultForm } from "../../form/form";
import { FormInput } from "../../input/inputs";
import { SkillForm } from "../../../models/project";

export default function CreateNewSkill({ label, onCancel }: { label: string; onCancel: () => void }) {
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

  const initialValues: SkillForm = {
    label: label,
  };

  return (
    <>
      <CustomFormModal
        title="Chỉnh sửa kỹ năng"
        open={visible}
        onCancel={() => {
          handleCancel();
          form.resetFields();
        }}
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
          name="CreateSkill"
          initialValues={initialValues}
        >
          <Form.Item
            name="label"
            label="Kỹ năng"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <FormInput />
          </Form.Item>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
