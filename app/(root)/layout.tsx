import Navbar from "../../components/Navbar";

export default function Layout({ children }: Readonly<{ childern: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Navbar/>
            {children}
        </main>
    )
}