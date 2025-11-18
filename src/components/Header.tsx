export default function Header() {
    return (
        <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <div>
                <h1 className="text-xl font-semibold text-slate-900">
                    Gestión de mascotas
                </h1>
                <p className="text-sm text-slate-500">
                    Aplicación para el control de perros y gatos
                </p>
            </div>
        </div>
    </header>
    );
}