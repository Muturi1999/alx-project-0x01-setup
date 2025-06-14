import Button from "@/components/common/Button";

const UsersPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <Button text="Click Me" onClick={() => alert("User Clicked!")} />
    </div>
  );
};

export default UsersPage;
