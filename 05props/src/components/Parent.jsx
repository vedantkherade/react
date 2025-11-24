export default function Parent() {
  return (
    <div>
      <Dashboard />
      <Button>Save</Button>
      <Button>Reset</Button>
      <Button>Download</Button>
    </div>
  );
}

function Dashboard() {
  let user = { name: "Jay", age: 26 };
  return <Sidebar user={user} />;
}

function Sidebar({ user }) {
  return <UserInfo user={user} />;
}

function UserInfo({ user }) {
  return <Avatar user={user} />;
}

function Avatar({ user }) {
  return <h2>{user.name}</h2>;
}

function Button({ children }) {
  return <button>{children}</button>;
}
