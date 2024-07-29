import Link from 'next/link';

export default function Apparels() {
  return (
    <section className="p-10 text-center">
      <h1>This is the apparels page</h1>
      <p>To view the working prototype visit the <Link href="/shoes" scroll={false} className="text-blue font-bold">SHOES</Link> page</p>
    </section>
  );
}
