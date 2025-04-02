import { getUsers } from "@/actions/code-of-conduct";

export default async function UserList() {
  // Fetch users using the server action
  const { success, data: users, error } = await getUsers();

  if (!success) {
    return (
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <h1 className="text-2xl font-bold mb-4">Code of Conduct Acceptance List</h1>

      {users.length === 0 ? (
        <p className="text-gray-500">No users have signed up yet.</p>
      ) : (
        <div className="grid gap-4">
          {users.map((user, index) => (
            <div key={user._id} className="bg-white p-4 rounded-lg shadow flex flex-row gap-2 items-center">
              <h3 className="font-semibold">
                {index + 1}. {user.name}
              </h3>
              <p className="text-gray-600">({user.email})</p>
              <p className="text-sm text-gray-400">Accepted on: {new Date(user.acceptedAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
