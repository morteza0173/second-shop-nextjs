import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";

import { createProductAction } from "@/utils/action";

import { fakerFA as faker } from "@faker-js/faker";

function CreateProductsPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        اضافه کردن محصول
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="نام محصول"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="نام برند"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>

          <TextAreaInput
            name="description"
            labelText="توضیحات محصول"
            defaultValue={description}
          />

          <div className="mt-6">
            <CheckboxInput name="featured" label="محصول پیشنهادی؟" />
          </div>
          <SubmitButton text="افزودن محصول" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductsPage;
