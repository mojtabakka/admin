import { Button, Card } from "components";
import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { LENZ, BORD } from "./CreateProduct.config";
const CreateProductTemplate = ({ onSubmit, isLoading }) => {
  return (
    <div className=" text__center w-100 margin__top__50 flex__center">
      <div className="w-75">
        <Card headerTitle="ایجاد محصول جدید">
          <form onSubmit={onSubmit}>
            <InputGroup className="mb-3 padding__10">
              <InputGroup.Text id="basic-addon1"> نام برد </InputGroup.Text>
              <Form.Control name={BORD} />
            </InputGroup>

            <InputGroup className="mb-3 padding__10">
              <InputGroup.Text id="basic-addon1">نام لنز</InputGroup.Text>
              <Form.Control name={LENZ} />
            </InputGroup>
            <div className="text__left margin__horizontal__20 margin__vertical__20">
              <Button type="submit" isLoading={isLoading}>
                تایید
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export { CreateProductTemplate };
