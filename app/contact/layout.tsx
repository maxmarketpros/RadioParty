import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Radio Prophets Events",
    description: "Ready to take your event to the next level? Contact Radio Prophets Events today to check availability and request a custom quote for your wedding or corporate event in Santa Barbara.",
    openGraph: {
        title: "Contact Radio Prophets Events | Santa Barbara Wedding Entertainment",
        description: "Get in touch for award-winning wedding bands, DJs, and live music in Santa Barbara and Southern California.",
    }
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
