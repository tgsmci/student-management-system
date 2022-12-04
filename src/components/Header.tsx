export default function Header() {
  return (
    <div className="flex flex-row justify-between p-4 bg-red-200">
      <h1 className="text-xl font-bold">TGSMCI</h1>
      <div className="flex flex-row gap-4">
        <a>SY 2022-2023</a>
        <a>Logout</a>
      </div>
    </div>
  )
}