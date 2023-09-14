import NotificationComponent from "@/components/Home/notification";
import Section1 from "@/components/Home/section1";
import Section2 from "@/components/Home/section2";

export default function Home() {
  return (
    <div>
      <Section1 />
      <NotificationComponent />
      <Section2 />
    </div>
  );
}
