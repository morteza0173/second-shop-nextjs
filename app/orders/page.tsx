import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import SectionTitle from "@/components/global/SectionTitle";
import { fetchUserOrders } from "@/utils/action";
import { formatCurrencyIr, formatDate } from "@/utils/format";
async function OrdersPage() {
  const orders = await fetchUserOrders();

  return (
    <>
      <SectionTitle text="سفارشات شما" />
      <div>
        <Table>
          <TableCaption>همه سفارشات : {orders.length}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>محصولات</TableHead>
              <TableHead>هزینه نهایی</TableHead>
              <TableHead>مالیات</TableHead>
              <TableHead>هزینه ارسال</TableHead>
              <TableHead>تاریخ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const { products, orderTotal, tax, shipping, createdAt } =
                order;

              return (
                <TableRow key={order.id}>
                  <TableCell>{products}</TableCell>
                  <TableCell>{formatCurrencyIr(orderTotal)}</TableCell>
                  <TableCell>{formatCurrencyIr(tax)}</TableCell>
                  <TableCell>{formatCurrencyIr(shipping)}</TableCell>
                  <TableCell>{formatDate(createdAt)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
export default OrdersPage;
