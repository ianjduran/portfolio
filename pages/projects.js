import Link from "next/link";
import homeStyles from "../styles/Home.module.css";

export default function Projects() {
    return (
        <main className={homeStyles.main}>
            <div className={homeStyles.container}>
                <h1> Ooopss</h1>
                <p> This Page is under construction, come back later =)</p>

                <h3>
                    <Link href="/">← Back to home</Link>
                </h3>
            </div>
        </main>
    );
}