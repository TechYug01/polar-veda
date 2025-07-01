import AIEnhancedFeedbackPage from "@/components/AIEnhancedFeedbackPage";
import GetInTouch from "@/components/GetInTouch";
import HomePage from "@/components/HomePage";
import Testimonials from "@/components/Testimonials";
import WelcomePage from "@/components/WelcomePage";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HomePage />
      <WelcomePage />
      <WhyChooseUs />
      <AIEnhancedFeedbackPage />
      <Testimonials />
      <GetInTouch />
    </>
  );
}
