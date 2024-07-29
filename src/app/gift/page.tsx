import Link from 'next/link';

export default function Gift() {
  return (
    <section className="p-10 text-center">
      <h1>This is the gift page</h1>
      <p>To view the working prototype visit the <Link href="/shoes" scroll={false} className="text-blue font-bold">SHOES</Link> page</p>
    </section>
  );
}
