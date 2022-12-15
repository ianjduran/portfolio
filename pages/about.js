import Link from "next/link"
import styles from "../styles/About.module.css"
import Image from "next/image";
import KeywordBox from "../components/keyword-box";
import keywordStyles from '../components/skills-box.module.css';
import skillsBoxStyle from '../components/skills-box.module.css'

import EdItem from "../components/edItem";


export default function AboutPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Me</h1>

            <p className={styles.description}>
            I&apos;m a student born in Bolivia currently pursuing a Robotics and Digital Systems Engineering in my third year. Blah Blah Blah
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ante erat. Donec rutrum felis est, sit amet dignissim risus pharetra a. Ut quis nisi quam. Nam sollicitudin, massa vitae vulputate accumsan, nibh leo laoreet erat, eget pretium eros metus at augue. Donec ipsum dui, dictum ac magna vitae, vehicula maximus mauris. */}
            </p>

            <h1>Skills</h1>
            <div className={styles.grid}>
                <div className={skillsBoxStyle.skillBox}>
                    <span className={styles.logo}>
                        <Image src="/robotics.svg" alt="Logo" width={72} height={72} />
                    </span>
                    <h2>Robotics</h2>
                    <div className={keywordStyles.primary}>
                        <KeywordBox orange>Kicad</KeywordBox>
                        <KeywordBox orange>ROS</KeywordBox>
                        <KeywordBox orange>FreeRTOS</KeywordBox>
                        <KeywordBox orange>Prototyping</KeywordBox>
                        <KeywordBox orange>CAD</KeywordBox>
                        <KeywordBox orange>Control Theory</KeywordBox>
                    </div>
                </div>
                <div className={skillsBoxStyle.skillBox}>
                    <span className={styles.logo}>
                        <Image src="/code.svg" alt="Logo" width={60} height={60} />
                    </span>
                    <h2> Programming </h2>
                    <div>
                        <KeywordBox>C++</KeywordBox>
                        <KeywordBox>Python</KeywordBox>
                        <KeywordBox>Linux</KeywordBox>
                        <KeywordBox>MATLAB</KeywordBox>
                        <KeywordBox>Git</KeywordBox>
                        {/* <KeywordBox>R</KeywordBox> */}
                        <KeywordBox>Javascript</KeywordBox>
                        <KeywordBox>Node.JS</KeywordBox>
                        <KeywordBox>MongoDB</KeywordBox>
                        <KeywordBox>SQL</KeywordBox>
                        <KeywordBox>AWS</KeywordBox>
                    </div>
                </div>

                {/* <div className={skillsBoxStyle.skillBox}>
            <span className={styles.logo}>
              <Image src="/code.svg" alt="Logo" width={60} height={60} />
            </span>
            <h2> Tools </h2>
            <div>
              <KeywordBox>Git</KeywordBox>
            </div>
          </div> */}

            </div>
            <h1>Education</h1>
                <EdItem
                    school="Tecnológico de Monterrey"
                    subsection="B.S. Robotics and Digital Systems Engineering"
                    location="Monterrey, México"
                    date="Aug, 2020 - Jun, 2024"
                />
                <EdItem
                    school="F.E.P.P.A San Ignacio de Loyola (High School)"
                    subsection="Bachiller en Humanidades"
                    location="La Paz, Bolivia"
                    date="2008-2019"
                />
            <h1>Awards</h1>

                

            <h3>
                <Link className={styles.backToHome} href="/">← Back to home</Link>
            </h3>
        </div>

    );
}