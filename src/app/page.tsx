import Container from "../components/layout/Container";
import NavBar from "../components/layout/NavBar";

export default function Home() {
  return (
    <main>
      <Container>
        <NavBar />
      </Container>
      <section id="home">
        <Container>
          <h2>Home</h2>
        </Container>
      </section>
      <section id="about">
        <Container>
          <h2>About</h2>
        </Container>
      </section>
      <section id="projects">
        <Container>
          <h2>Projects</h2>
        </Container>
      </section>
      <section id="contact">
        <Container>
          <h2>Contact</h2>
        </Container>
      </section>
    </main>
  );
}
