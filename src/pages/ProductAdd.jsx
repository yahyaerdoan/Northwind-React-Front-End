import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: "" };

  const schema = Yup.object({
    productName: Yup.string().required("ürün adı zorunludur."),
    unitPrice: Yup.number().required("ürün fiyatı zorunludur."),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          //console.log(values);
        }}
      >
        <Form className="ui form">
          <label>Ürün Adı</label>
          <KodlamaIoTextInput name="productName" placeholder="ürün adı" />
          <label>Ürün Fiyatı</label>
          <KodlamaIoTextInput name="unitPrice" placeholder="ürün fiyatı" />
          {/* <FormField>
          <label>Ürün Adı</label>
            <Field name="productName" placeholder="ürün adı"></Field>
            <ErrorMessage name="productName" render={error=>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField> */}
          {/* <FormField>
            <label>Ürün Fiyatı</label>
            <Field name="unitPrice" placeholder="ürün fiyatı"></Field>
            <ErrorMessage name="unitPrice" render={error=>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField> */}
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
