import styles from "./page.module.css";
import Link from "next/link";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";

const InterviewList = () => {
    const MOCK_LIST_DATA = [
        "OpenAI",
        "Coupang",
        "Meta",
        "LinkedIn",
        "Stripe",
        "Plaid",
        "Snowflake",
        "HRT",
        "Amazon",
        "Google",
        "Microsoft",
        "Apple",
        "Databricks",
        "Netflix",
        "IMC",
        "Roblox",
    ];

    return (
        <ScrollArea className={styles.scrollArea}>
            <div className={styles.listContainer}>
                {MOCK_LIST_DATA.map((item) => (
                    <Link
                        key={item}
                        href={`/dashboard/${item.toLowerCase()}`}
                        className={styles.listItem}
                    >
                        {item}
                    </Link>
                ))}
            </div>
            <ScrollBar />
        </ScrollArea>
    );
};

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <nav className={styles.navBar}>
                <h1>Audio Replay</h1>
                <div className={styles.navBarSubContainer}>
                    <span>Interviews</span>
                    <span>Career</span>
                    <span>Blogs</span>
                    <span>Contact Us</span>
                    <span>Pricing</span>
                </div>
            </nav>
            {/* three-columns layout */}
            <div className={styles.contentContainer}>
                <InterviewList />
                <div className={styles.detailContainer}>{children}</div>
            </div>
        </section>
    );
}