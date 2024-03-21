import { CustomFormModal } from "../../modal/modal";
import { useState } from "react";
import { Form } from "antd";
import { DefaultForm } from "../../form/form";
import { FormInput } from "../../input/inputs";
import { PrimaryButton } from "../../button/buttons";
import { FieldForm } from "../../../models/project";
import { SelectMultiple } from "../../select/select";
import { skills } from "../../../../constants/skill";

export default function CreateNewField() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  const initialValues: FieldForm = {
    label: "",
    skills: [""],
  };

  return (
    <>
      <PrimaryButton onClick={() => setOpen(true)}>Thêm kỹ năng</PrimaryButton>
      <CustomFormModal
        title="Thêm kỹ năng"
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
          name="CreateField"
          initialValues={initialValues}
        >
          <Form.Item
            name="label"
            label="Chuyên ngành"
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
