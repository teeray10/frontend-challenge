import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-10 text-center">
      <h1>This page has not been implemented.</h1>
      <p>To view the working prototype visit the <Link href="/shoes" className="text-blue font-bold">SHOES</Link> page</p>
    </div>
  );
}