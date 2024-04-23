export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-4">
      <div className="w-1/3">Andromeda-Movers</div>
      <div className="w-2/3">
        <ul className="flex justify-around">
          <li>Layanan</li>
          <li>Pengguna Jasa</li>
        </ul>
      </div>
    </nav>
  );
}
