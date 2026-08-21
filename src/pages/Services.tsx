import PageHero from "../components/PageHero";
import ServicesGrid from "../components/ServicesGrid";
import PriceList from "../components/PriceList";
import Cta from "../components/Cta";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Послуги"
        title="Ритуали для вашої природної краси"
        subtitle="Епіляція, депіляція, шугаринг, ламінування вій та догляд за бровами — з увагою до кожної деталі."
      />
      <ServicesGrid showCta={false} />
      <PriceList />
      <Cta />
    </>
  );
}
