import { ImageCarousel,Reviews,LandingHero,LandingToServices } from "../components"
const Landing = () => {
  return (
    <div>
      <ImageCarousel/>
      <LandingHero/>
      <div className="-mb-36">
      <LandingToServices/>
      </div>
      <Reviews/>
    </div>
  )
}
export default Landing 