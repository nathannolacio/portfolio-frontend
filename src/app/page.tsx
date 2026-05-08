import Container from "../components/layout/Container";

export default function Home() {
  return (
    <main>
      <section className="py-20">
        <Container>
          <h1 className="text-4xl font-bold">
            Hero Section
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-semibold">
            Projects Section
          </h2>
        </Container>
      </section>
    </main>
  );
}
