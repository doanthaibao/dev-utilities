import { lazy } from 'react';

const Card = lazy(() => import('./components/Card'));

function Home() {
  return (
    <main>
      <section className="utilities">
        <Card
          title="UUID Generator"
          description="Generate random UUIDs"
          link="/uuid"
        />
        <Card
          title="JSON Formatter"
          description="Format JSON data"
          link="/jsonformat"
        />
        <Card
          title="Base64 Encoder/Decoder"
          description="Easily ecnode or decode Base64 data"
          link="/base64"
        />
      </section>
    </main>
  );
}

export default Home;
