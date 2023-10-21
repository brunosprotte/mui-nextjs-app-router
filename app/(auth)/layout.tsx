export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}  >
            {children}
        </div>
    )
}