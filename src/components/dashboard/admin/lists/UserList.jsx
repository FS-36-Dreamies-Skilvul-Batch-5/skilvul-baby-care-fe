import UserCard from "../cards/UserCard";

export default function UserList({users}) {
  return (
    <div className="w-full border border-[#D1D9E2] rounded-xl overflow-x-scroll scrollbar__hidden">
      <table className="w-full min-w-[1024px] table-auto border-collapse select-none">
        <thead>
          <tr className="border-b border-[#D1D9E2]">
            <th className="text-[#272C49] text-center py-2 w-16">No</th>
            <th className="text-[#272C49] text-center py-2">Nama</th>
            <th className="text-[#272C49] text-center py-2">Username</th>
            <th className="text-[#272C49] text-center py-2">Email</th>
            <th className="text-[#272C49] text-center py-2">Image URL</th>
            <th className="text-[#272C49] text-center py-2">Role</th>
            <th className="text-[#272C49] text-center py-2">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {users.length !== 0 ? (
            users.map((user, index) => (
              <UserCard {...user} key={index} user_number={index}/>
            ))
          ) : (
            <td colSpan={7} className="py-5 text-center text-red-500">
              Tidak ada data dengan filter tersebut...
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
}