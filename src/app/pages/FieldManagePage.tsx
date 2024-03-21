import { Col, Flex, Layout, Row, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import FieldTable from "../components/ui-admin/field-management/FieldTable";
import CreateNewField from "../components/ui-admin/field-management/CreateNewField";
import SkillList from "../components/ui-admin/field-management/SkillList";

export default function FieldManagePage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Row>
          <Col offset={18} span={6}>
            <Flex justify="space-evenly">
              <SkillList />
              <CreateNewField />
            </Flex>
          </Col>
        </Row>
        <FieldTable />
      </Content>
    </Layout>
  );
}
