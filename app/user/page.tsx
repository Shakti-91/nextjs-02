import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/v1");  // ✅ Correct endpoint
  await new Promise((r) => setTimeout(r, 5000));
  return response.data;  // ✅ Returns string[]
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen gap-4 p-8">
      {userData.map((username, index) => (
        <div key={index} className="border p-8 rounded bg-gray-50">
          {username}
        </div>
      ))}
      {userData.length === 0 && <div>No users yet</div>}
    </div>
  );
}
