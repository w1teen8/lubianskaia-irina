import PageHero from "../components/PageHero";
import ServicesGrid from "../components/ServicesGrid";
import Cta from "../components/Cta";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Послуги"
        title="Створюємо ваш неповторний образ"
        subtitle="Персональний стиль, макіяж, догляд та шопінг-супровід — з увагою до кожної деталі."
      />
      <ServicesGrid showCta={false} hideHeader />
      <Cta />
    </>
  );
}
