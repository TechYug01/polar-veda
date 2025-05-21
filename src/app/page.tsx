import About from "@/components/About";
import Gallery from "@/components/Gallery";
import GetInTouch from "@/components/GetInTouch";
import HomePage from "@/components/HomePage";
import ExploreOfferings from "@/components/Offering/Explore";
import ExploreDetails from "@/components/Offering/ExploreDetailsSection";
import Reviews from "@/components/Reviews";
import SimpleLearningSteps from "@/components/SimpleLearningSteps";
import WelcomePage from "@/components/WelcomePage";

export default function Home() {
  return (
    <>
      <HomePage />
      <WelcomePage />
      <ExploreOfferings />
      <ExploreDetails />
      <SimpleLearningSteps />
      <About />
      <Reviews />
      <Gallery />
      <GetInTouch />
    </>
  );
}
