import Link from "next/link";
import { Button } from "../ui/button";
import { VscCoffee } from "react-icons/vsc";

function Logo() {
  return (
    <Button size="lg" className="w-24" asChild>
      <Link href="/">
        <VscCoffee className="h-6 w-6" />
      </Link>
    </Button>
  );
}
export default Logo;
