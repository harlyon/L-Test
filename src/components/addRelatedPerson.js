import React, { useState, useContext } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import {
  Button,
  Drawer,
  Form,
  Row,
  Col,
  Input,
  Select,
  DatePicker,
  Radio,
} from "antd";
import { GlobalContext } from "../context/GlobalState";

const AddRelatedPerson = (props) => {
  const [firstName, setFirstName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [birth, setBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [checked, setChecked] = useState(false);

  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      firstName,
      lastName,
      sex,
      birth,
      nationality,
      relationship,
      checked,
    };
    addUser(newUser);
    props.onClose();
    console.log(newUser);
  };

  const handleClick = () => setChecked(!checked);

  const { Option } = Select;
  return (
    <div>
      <Drawer
        title="Add a related person"
        width={350}
        placement="right"
        closable={false}
        onClose={props.onClose}
        visible={props.visible}
        className="addPersonDrawer"
        getContainer={false}
        style={{ position: "absolute" }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              className="links"
              type="link"
              onClick={props.onClose}
              style={{ marginRight: 33 }}
              icon={<ArrowLeftOutlined />}
            >
              Cancel
            </Button>
            <Button onClick={onSubmit} className="card-button" type="primary">
              Add related person
            </Button>
          </div>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Relationship"
                rules={[
                  {
                    required: true,
                    message: "Please enter user relationship status",
                  },
                ]}
              >
                <Input
                  placeholder="Please enter relationship status"
                  defaultValue=""
                  onChange={(e) => setRelationship(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="First Name"
                rules={[
                  { required: true, message: "Please enter user first name" },
                ]}
              >
                <Input
                  placeholder="Please enter user name"
                  defaultValue=""
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Last Name"
                rules={[
                  { required: true, message: "Please enter user last name" },
                ]}
              >
                <Input
                  placeholder="Please enter user name"
                  defaultValue=""
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="sex"
                label="Sex"
                rules={[{ required: true, message: "Please select a value" }]}
              >
                <Select
                  placeholder="Please select an owner"
                  defaultValue=""
                  onChange={(value) => {
                    setSex(value);
                  }}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="birth"
                label="Date of Birth"
                rules={[
                  { required: true, message: "Please choose the dateTime" },
                ]}
              >
                <DatePicker
                  onChange={(value) => setBirth(value)}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                //name="nationality"
                label="Nationality"
                rules={[
                  { required: true, message: "Please enter Nationality" },
                ]}
              >
                <Input
                  placeholder="Please enter user name"
                  defaultValue={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="southafricanresident"
                label="Permanent South African resident?"
                rules={[{ required: true, message: "Please select option" }]}
              >
                <Radio.Group
                  style={{ marginRight: 344 }}
                  onChange={handleClick}
                  defaultValue={checked}
                >
                  <Radio className="radioStyle" value={1}>
                    Yes
                  </Radio>
                  <br />
                  <Radio className="radioStyle" value={0}>
                    No
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default AddRelatedPerson;
