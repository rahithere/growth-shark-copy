import logo from "../../assets/logo.png"

const AdminHeader = () => {
    return (
        <header className="h-20 bg-[#71B5F0]">
            <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-8">

                {/* Logo */}
                <img
                    src={logo}
                    alt="Growthshark"
                    className="w-[120px] object-contain"
                />

                {/* Logout */}
                <button
                    type="button"
                    className="rounded-full bg-[#A8F000] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(0,0,0,0.25)] active:translate-y-0">
                    Logout
                </button>

            </div>
        </header>
    );
};

export default AdminHeader;