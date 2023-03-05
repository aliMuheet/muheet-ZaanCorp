import Link from "next/link";
import { useRouter } from "next/router";
export default function Sidebar(props) {
    const router = useRouter();

    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <nav className="main-nav">
                    <ul className="nav-list main-nav-list">
                        {/* Just for this test project otherwise this should be the home page */}
                        <li className={router.pathname == "/dashboard" ? "active" : ""}>
                            <Link href="/dashboard" title="Dashboard">
                                <span className="icon zcIcon-Dashboad"></span>
                                <span className="link-text">Dashboard</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/" ? "active" : ""}>
                            <Link href="/" title="Workflow">
                                <span className="icon zcIcon-Workflow"></span>
                                <span className="link-text">Workflow</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/calendar" ? "active" : ""}>
                            <Link href="/calendar" title="Calendar">
                                <span className="icon zcIcon-Calendar"></span>
                                <span className="link-text">Calendar</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/social-rm" ? "active" : ""}>
                            <Link href="/social-rm" title="SocialRM">
                                <span className="icon zcIcon-social-media"></span>
                                <span className="link-text">SocialRM</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/metrics" ? "active" : ""}>
                            <Link href="/metrics" title="Metrics">
                                <span className="icon zcIcon-Analytic"></span>
                                <span className="link-text">Metrics</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/leads" ? "active" : ""}>
                            <Link href="/leads" title="Leads">
                                <span className="icon zcIcon-User-Lead"></span>
                                <span className="link-text">Leads</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/notifications" ? "active" : ""}>
                            <Link href="/notifications" title="Notifications">
                                <span className="icon zcIcon-Notifications"></span>
                                <span className="link-text">Notifications</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/documents" ? "active" : ""}>
                            <Link href="/documents" title="Documents">
                                <span className="icon zcIcon-Documents"></span>
                                <span className="link-text">Documents</span>
                            </Link>
                        </li>
                        <li className={router.pathname == "/segments" ? "active" : ""}>
                            <Link href="/segments" title="Segments">
                                <span className="icon zcIcon-Segments"></span>
                                <span className="link-text">Segments</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav-list">
                        {/* Just for this test project otherwise this should be the home page */}
                        <li className={router.pathname == "/company" ? "active" : ""}>
                            <Link href="/company" title="Company">
                                <span className="icon zcIcon-File-check"></span>
                                <span className="link-text">Company</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
