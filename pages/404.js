import PageContentBody from "@/components/pageContentBody";
import PageContentHeader from "@/components/pageContentHeader";
import Link from "next/link";

export default function PageNotFound() {
    return (
        <>
            <PageContentHeader title="Page Not Found" />
            <PageContentBody>
                <p>The Page You Are looking for is not available</p>
                <Link className="btn btn-primary" href="/">
                    Home Page
                </Link>
            </PageContentBody>
        </>
    );
}
