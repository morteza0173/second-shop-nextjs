import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { fetchAdminOrders } from "@/utils/action";
import { formatCurrencyIr, formatDate } from "@/utils/format";
async function SalesPage() {
  const orders = await fetchAdminOrders();

  return (
    <div>
      <Table>
        <TableCaption>همه سفارشات : {orders.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ایمیل</TableHead>
            <TableHead>محصولات</TableHead>
            <TableHead>تعداد محصولات</TableHead>
            <TableHead>مالیات</TableHead>
            <TableHead>هزینه ارسال</TableHead>
            <TableHead>تاریخ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const { products, orderTotal, tax, shipping, createdAt, email } =
              order;

            return (
              <TableRow key={order.id}>
                <TableCell>{email}</TableCell>
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
  );
}
export default SalesPage;
