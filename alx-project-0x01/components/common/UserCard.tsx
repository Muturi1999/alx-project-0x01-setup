import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-700 mt-2"><strong>Email:</strong> {email}</p>
      <p className="text-gray-700"><strong>Phone:</strong> {phone}</p>
      <p className="text-gray-700"><strong>Website:</strong> {website}</p>
      <p className="text-gray-700"><strong>Company:</strong> {company.name}</p>
      <p className="text-gray-500 text-sm mt-2">
        {address.street}, {address.city} ({address.zipcode})
      </p>
    </div>
  );
};

export default UserCard;
