import styles from "./main.module.scss";
import Title from "@/src/components/ui/Title/Title";
import BannerSection from "@/src/pagesComponents/Main/BannerSection/BannerSection";
import AdvantagesSection from "@/src/pagesComponents/Main/AdvantagesSection/AdvantagesSection";
import TariffSection from "@/src/pagesComponents/Main/TariffSection/TariffSection";
import StepSection from "@/src/pagesComponents/Main/StepsSection/StepsSection";

export default function Page() {
  return (
    <>
      <BannerSection />
      <AdvantagesSection />
      <TariffSection />
      <StepSection />
    </>
  );
}
