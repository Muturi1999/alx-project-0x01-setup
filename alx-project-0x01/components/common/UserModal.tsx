// components/common/UserModal.tsx

import { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<UserData, "id">>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("address.geo.")) {
      const field = name.split(".")[2];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [field]: value,
          },
        },
      }));
    } else if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
          geo: { ...prev.address.geo },
        },
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, id: Date.now() }); // simple unique ID
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto">
          <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="phone" type="text" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="website" type="text" placeholder="Website" value={formData.website} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="address.street" type="text" placeholder="Street" value={formData.address.street} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="address.city" type="text" placeholder="City" value={formData.address.city} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="address.zipcode" type="text" placeholder="Zipcode" value={formData.address.zipcode} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="company.name" type="text" placeholder="Company Name" value={formData.company.name} onChange={handleChange} className="w-full p-2 border rounded" />

          <div className="flex justify-end space-x-4 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
