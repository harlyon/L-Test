import React, { useContext } from "react";
import "antd/dist/antd.css";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import img from "../assets/img.svg";
import AddRelatedPerson from "./addRelatedPerson";
import AllPersons from "./allPersons";
import { GlobalContext } from "../context/GlobalState";

const RelatedPerson = () => {
  const [visible, setVisible] = React.useState(false);
  const { users } = useContext(GlobalContext);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <div style={{ marginTop: 86 }}>
      <div>Add Related Person</div>
      {!users.length > 0 && (
        <div className="card">
          <div className="card-icon">
            <img src={img} alt="png" />
          </div>
          <label className="card-description">
            You haven’t added any related persons
          </label>
          <div style={{ marginTop: 16 }}>
            <Button
              type="primary"
              className="card-button"
              icon={<PlusCircleOutlined />}
              onClick={showDrawer}
            >
              Add person
            </Button>
          </div>
        </div>
      )}
      <br />
      <br />
      <Row className="LandingPersonalRow" gutter={16}>
        <AllPersons />
        <br />
        {users.length > 0 && (
          <Col className="RelatedCard" span={10}>
            <div style={{ marginTop: 18 }}>
              <Button
                type="primary"
                className="card-button"
                icon={<PlusCircleOutlined />}
                onClick={showDrawer}
              >
                Add person
              </Button>
            </div>
          </Col>
        )}
      </Row>

      <AddRelatedPerson visible={visible} onClose={onClose} />
    </div>
  );
};

export default RelatedPerson;
