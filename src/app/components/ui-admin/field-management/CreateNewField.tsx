import { CustomFormModal } from "../../modal/modal";
import { useState } from "react";
import { Form } from "antd";
import { DefaultForm } from "../../form/form";
import { FormInput } from "../../input/inputs";
import { PrimaryButton } from "../../button/buttons";
import { SkillForm } from "../../../models/project";
import { SelectMultiple } from "../../select/select";
import { skills } from "../../../../constants/skill";

export default function CreateNewSkill() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  const initialValues: SkillForm = {
    label: "",
  };

  return (
    <>
      <PrimaryButton onClick={() => setOpen(true)}>Thêm ngành</PrimaryButton>
      <CustomFormModal
        title="Thêm ngành"
        open={open}
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
    </>
  );
}
