import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Live Performance Videos | Radio Prophets Events",
    description: "Experience the energy and elegance of Radio Prophets. Browse our complete collection of live performances from weddings and events in Santa Barbara and beyond.",
    openGraph: {
        title: "Radio Prophets Live Performance Archive | Wedding Band & DJ Videos",
        description: "Watch live videos of Radio Prophets performing at weddings, corporate events, and luxury celebrations.",
    }
};

export default function VideosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
