const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

<ul>
  {users.map(user => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>
