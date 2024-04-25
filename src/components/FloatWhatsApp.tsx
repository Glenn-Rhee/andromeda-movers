import { FaWhatsapp } from "react-icons/fa";

export default function FloatWhatsApp() {
  return (
    <div className="fixed bottom-5 left-5 z-50 bg-[#25D366] rounded-full p-3">
      <a href="https://wa.me/6287884393999" target="_blank">
        <FaWhatsapp size={40} className="text-white" />
      </a>
    </div>
  );
}
