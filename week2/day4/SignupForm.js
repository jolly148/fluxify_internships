function SignupForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("All fields are required!");
      return;
    }
    alert(`Signed up: ${formData.name}, ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup Form</h2>
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Name"
      />
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
