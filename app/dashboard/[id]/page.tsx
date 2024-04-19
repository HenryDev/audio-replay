import styles from "./page.module.css";
import {IoPlay} from "react-icons/io5";

interface InterviewDetailProps {
  params: {
    id: string;
  };
}

interface InterviewItem {
  id: string;
  file: string;
  text: string;
  audioStartTime: string;
  audioEndTime: string;
}

const MOCK_DATA: Record<string, InterviewItem[]> = {
  openai: [
    {
      id: "1",
      file: "url-to-openai-audio-file-1",
      text: "Hello, I'm the interviewer from OpenAI",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-openai-audio-file-2",
      text: "Let's discuss your experience with machine learning models",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  coupang: [
    {
      id: "1",
      file: "url-to-coupang-audio-file-1",
      text: "Welcome to the Coupang interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-coupang-audio-file-2",
      text: "Can you share your experience with e-commerce platforms?",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  meta: [
    {
      id: "1",
      file: "url-to-meta-audio-file-1",
      text: "Hello, let's start the Meta interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-meta-audio-file-2",
      text: "How would you approach building a scalable social media platform?",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  linkedin: [
    {
      id: "1",
      file: "url-to-linkedin-audio-file-1",
      text: "Welcome to the LinkedIn interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-linkedin-audio-file-2",
      text: "Let's discuss your experience with professional networking platforms",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  stripe: [
    {
      id: "1",
      file: "url-to-stripe-audio-file-1",
      text: "Hello, thanks for joining the Stripe interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-stripe-audio-file-2",
      text: "Can you walk us through your approach to building a secure payment system?",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  plaid: [
    {
      id: "1",
      file: "url-to-plaid-audio-file-1",
      text: "Welcome to the Plaid interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-plaid-audio-file-2",
      text: "Let's discuss your experience with financial data integration",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  snowflake: [
    {
      id: "1",
      file: "url-to-snowflake-audio-file-1",
      text: "Hello, thanks for joining the Snowflake interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-snowflake-audio-file-2",
      text: "Can you share your experience with cloud-based data warehousing?",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  hrt: [
    {
      id: "1",
      file: "url-to-hrt-audio-file-1",
      text: "Welcome to the HRT interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-hrt-audio-file-2",
      text: "Let's discuss your experience with quantitative trading strategies",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  amazon: [
    {
      id: "1",
      file: "url-to-amazon-audio-file-1",
      text: "Hello, I'm the interviewer from Amazon",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-amazon-audio-file-2",
      text: "Can you share your experience with large-scale distributed systems?",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  google: [
    {
      id: "1",
      file: "url-to-google-audio-file-1",
      text: "Welcome to the Google interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-google-audio-file-2",
      text: "Can you explain your approach to algorithm design?",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  microsoft: [
    {
      id: "1",
      file: "url-to-microsoft-audio-file-1",
      text: "Hello, let's start the Microsoft interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-microsoft-audio-file-2",
      text: "Let's discuss your experience with cloud computing and Azure services",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  apple: [
    {
      id: "1",
      file: "url-to-apple-audio-file-1",
      text: "Welcome to the Apple interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-apple-audio-file-2",
      text: "Can you share your experience with mobile app development and user experience design?",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  databricks: [
    {
      id: "1",
      file: "url-to-databricks-audio-file-1",
      text: "Hello, thanks for joining the Databricks interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-databricks-audio-file-2",
      text: "Let's discuss your experience with big data processing and analytics",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  netflix: [
    {
      id: "1",
      file: "url-to-netflix-audio-file-1",
      text: "Welcome to the Netflix interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-netflix-audio-file-2",
      text: "Can you share your experience with streaming media platforms and content delivery?",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  imc: [
    {
      id: "1",
      file: "url-to-imc-audio-file-1",
      text: "Hello, let's start the IMC interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-imc-audio-file-2",
      text: "Let's discuss your experience with algorithmic trading and financial modeling",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
  roblox: [
    {
      id: "1",
      file: "url-to-roblox-audio-file-1",
      text: "Welcome to the Roblox interview",
      audioStartTime: "",
      audioEndTime: "",
    },
    {
      id: "2",
      file: "url-to-roblox-audio-file-2",
      text: "Can you share your experience with game development and online platforms?",
      audioStartTime: "",
      audioEndTime: "",
    },
  ],
};

export default function InterviewDetail({ params }: InterviewDetailProps) {
  const { id } = params;
  const interviewData = MOCK_DATA[id.toLowerCase()] || [];
  const suggestionText = `Here are some suggestions for the ${id} interview`;

  return (
      <main className={styles.container}>
        <ul className={styles.transcriptContainer}>
          {interviewData.map((item) => (
              <li key={item.id} className={styles.transcriptItem}>
                <button className={styles.playButton}>
                  <IoPlay />
                </button>
                <audio src={item.file}></audio>
                <span>{item.text}</span>
              </li>
          ))}
        </ul>
        <div className={styles.suggestionContainer}>
          <span>{suggestionText}</span>
        </div>
      </main>
  );
}