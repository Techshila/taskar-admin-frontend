import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="login" className={buttonVariants({ variant: "outline" })}>Login</Link>
      <Link href="register" className={buttonVariants({ variant: "outline" })}>Register</Link>
    </main>
  );
}
