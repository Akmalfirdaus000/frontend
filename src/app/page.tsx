import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   // pages/index.tsx

    <div>
      <h1>Welcome to the Application</h1>
      <Link href="/(landing)/login">Login</Link>
      <br />
      <Link href="/(landing)/register">Register</Link>
    </div>


  );
}
