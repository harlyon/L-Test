import React, { useContext } from "react";
import "antd/dist/antd.css";
import { DownOutlined, DeleteOutlined } from "@ant-design/icons";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { GlobalContext } from "../context/GlobalState";
import {
  Button,
  Dropdown,
  Menu,
  Col,
  Drawer,
  Form,
  Row,
  Input,
  Select,
  DatePicker,
  Radio,
} from "antd";
import moment from "moment";

const AllPersons = () => {
  const { users, removeUser, editUser } = useContext(GlobalContext);
  const [visible, setVisible] = React.useState(false);
  const [getId, setGetId] = React.useState("");
  const currentUserId = getId;
  const [selectedUser, setSelectedUser] = React.useState({
    id: "",
    firstName: "",
    lastName: "",
    relationship: "",
    sex: "",
    nationality: "",
    birth: "",
    checked: "",
  });

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const dateFormat = "YYYY/MM/DD";

  const handleMenuClick = () => {
    console.log("clicked");
  };

  React.useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    onClose();
  };

  const { Option } = Select;

  return (
    <>
      {users.length > 0 &&
        users.map((user) => (
          <Col key={user.id} className="RelatedCard" span={10}>
            <strong>
              <div className="RelatedCardName">{user.firstName}</div>
            </strong>
            <label className="card-description">{user.relationship}</label>
            <div>
              <Button
                onClick={() => {
                  setVisible(visible);
                  setGetId(user.id);
                  showDrawer();
                }}
              >
                Edit
              </Button>
              <Dropdown
                overlay={
                  <Menu onClick={handleMenuClick}>
                    <Menu.Item
                      className="delete"
                      onClick={() => removeUser(user.id)}
                      key="1"
                      icon={<DeleteOutlined />}
                    >
                      Remove
                    </Menu.Item>
                  </Menu>
                }
              >
                <Button>
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </Col>
        ))}
      {selectedUser && (
        <Drawer
          destroyOnClose={true}
          title={`Edit ${selectedUser.firstName} ${selectedUser.lastName}`}
          width={350}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button
                className="links"
                type="link"
                onClick={onClose}
                style={{ marginRight: 33 }}
                icon={<ArrowLeftOutlined />}
              >
                Cancel
              </Button>
              <Button onClick={onSubmit} className="card-button" type="primary">
                Edit Related Person
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
                    name="relationship"
                    value={selectedUser.relationship}
                    onChange={onChange}
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
                    placeholder="Please enter first name"
                    name="firstName"
                    value={selectedUser.firstName}
                    onChange={onChange}
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
                    placeholder="Please enter last name"
                    name="lastName"
                    value={selectedUser.lastName}
                    onChange={onChange}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Sex"
                  rules={[{ required: true, message: "Please select a value" }]}
                >
                  <Select
                    placeholder="Please select an owner"
                    name="sex"
                    value={selectedUser.sex}
                    onChange={onChange}
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
                  label="Date of Birth"
                  rules={[
                    { required: true, message: "Please choose the dateTime" },
                  ]}
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    name="birth"
                    onChange={onDateChange}
                    value={selectedUser.birth}
                    format={dateFormat}
                    selected={selectedUser.birth}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Nationality"
                  rules={[
                    { required: true, message: "Please enter Nationality" },
                  ]}
                >
                  <Input
                    placeholder="Please enter user name"
                    value={selectedUser.nationality}
                    name="nationality"
                    onChange={onChange}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Permanent South African resident?"
                  rules={[{ required: true, message: "Please select option" }]}
                >
                  <Radio.Group
                    style={{ marginRight: 344 }}
                    name="checked"
                    value={selectedUser.checked}
                    onChange={onChange}
                  >
                    <Radio className="radioStyle" value={true}>
                      Yes
                    </Radio>
                    <br />
                    <Radio className="radioStyle" value={false}>
                      No
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      )}
    </>
  );
};

export default AllPersons;
