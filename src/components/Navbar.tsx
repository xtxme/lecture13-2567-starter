import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="d-flex justify-content-center gap-5 fs-4">
        <Link href="/">Home</Link>
        <Link href="/moive">Movie</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <hr />
    </div>
  );
}
