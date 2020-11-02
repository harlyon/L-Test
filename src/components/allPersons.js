import React, { useContext } from "react";
import "antd/dist/antd.css";
import { DownOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Col } from "antd";
import { GlobalContext } from "../context/GlobalState";

const AllPersons = () => {
  const { users, removeUser } = useContext(GlobalContext);
  const [visible, setVisible] = React.useState(false);

  const handleMenuClick = () => {
    console.log("clicked");
  };

  return (
    <>
      {users.length > 0 &&
        users.map((user) => (
          <Col key={user.id} className="RelatedCard" span={10}>
            <div>{user.firstName}</div>
            <label className="card-description">{user.relationship}</label>
            <div>
              <Button
                onClick={() => {
                  setVisible(visible);
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
    </>
  );
};

export default AllPersons;
