import MainHeader from "@/components/MainHeader";
import Naver from "@/components/Naver";
import CursorCheck from "@/components/CursorCheck";

export default function Home() {
  return (
    <main>
      <Naver />
      <MainHeader />
      <CursorCheck />
    </main>
  );
}
