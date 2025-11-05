import MainHeader from "@/components/MainHeader";
import Naver from "@/components/Naver";
import CursorCheck from "@/components/CursorCheck";
import Anvil from "@/components/Anvil";
import PracticeSlide from "@/components/PracticeSlide";

export default function Home() {
  return (
    <main>
      <Naver />
      <MainHeader />
      <CursorCheck />
      <Anvil />
      <PracticeSlide />
    </main>
  );
}
