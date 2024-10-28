import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrencyIr } from "@/utils/format";
import { createOrderAction } from "@/utils/action";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { Cart } from "@prisma/client";

function CartTotals({ cart }: { cart: Cart }) {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="قیمت محصولات" amount={cartTotal} />
        <CartTotalRow label="هزینه ارسال" amount={shipping} />
        <CartTotalRow label="مالیات" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="هزینه نهایی" amount={orderTotal} />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text="نهایی کردن سفارش" className="w-full mt-8" />
      </FormContainer>
    </div>
  );
}

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatCurrencyIr(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
}

export default CartTotals;
