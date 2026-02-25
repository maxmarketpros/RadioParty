import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio & Gallery | Radio Prophets Events",
    description: "Explore our collection of memorable moments from weddings, corporate events, and private celebrations across California. See Radio Prophets in action.",
    openGraph: {
        title: "Radio Prophets Events Gallery | Wedding & Event Portfolio",
        description: "Visual highlights of our live performances, wedding bands, and DJs performing at luxury events in Santa Barbara.",
    }
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
