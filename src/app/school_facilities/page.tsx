import FeatureCard from "../component/FeatureCard";

export default function Page() {
  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <h1 className="font-bold text">School Facilities</h1>
      <p>Explore our school's facilities and amenities.</p>
      <FeatureCard  />
    </div>
  )
}
