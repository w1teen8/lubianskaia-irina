import PageHero from "../components/PageHero";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Відгуки"
        title="Слова, що надихають"
        subtitle="Мені важлива кожна історія — дякую, що ділитесь враженнями."
      />
      <Testimonials showCta={false} hideHeader />
      <Cta />
    </>
  );
}
