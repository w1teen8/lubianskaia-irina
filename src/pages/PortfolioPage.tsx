import PageHero from "../components/PageHero";
import Portfolio from "../components/Portfolio";
import Cta from "../components/Cta";

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Портфоліо"
        title="Результати, якими пишаємось"
        subtitle="Робота з кожною клієнткою — це історія довіри та уваги до деталей."
      />
      <Portfolio showCta={false} />
      <Cta />
    </>
  );
}
