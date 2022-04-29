export function SortTable() {
  return (
    <select className="border text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:border-blue-300 cursor-pointer">
      <option value="Laster">Laster</option>
      <option value="AZ">Order by name: A - Z</option>
      <option value="ZA">Order by name: Z - A</option>
    </select>
  );
}
