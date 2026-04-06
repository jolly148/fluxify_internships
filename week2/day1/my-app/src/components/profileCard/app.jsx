import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="flex gap-4">
      <ProfileCard
        name="Alice"
        role="Frontend Developer"
        bio="Passionate about UI/UX design."
        avatar="/alice.png"
        available={true}
      />
      <ProfileCard
        name="Bob"
        role="Backend Developer"
        bio="Enjoys working with APIs."
        avatar="/bob.png"
        available={false}
      />
      <ProfileCard
        name="Charlie"
        role="Fullstack Engineer"
        bio="Loves building complete solutions."
        avatar="/charlie.png"
        available={true}
      />
    </div>
  );
}

export default App;
