import { useState } from "react";
import "./roadmap.css";
import { Github } from "lucide-react";

export default function cyber() {
  const steps = [
    {
      title: "Step 1",
      text: ["🔐 Core Fundamentals", "CIA Triad", "Network Security"],
    },
    {
      title: "Step 2",
      text: ["Cloud Security", "Endpoint Security" , "Application Security"],
    },
    {
      title: "Step 3",
      text: ["Ethical Hacking", "Reconnaissance", "Exploitation", "Penetration Testing Methodology"],
    },
    {
      title: "Step 4",
      text: [" Defensive Security", "SIEM Tools (Splunk, ELK)", "Incident Response (IR)" , "Threat Hunting","Digital Forensics"],
    },
    {
      title: "Step 5",
      text: [" Authentication & Authorization (MFA, OAuth, SSO)" , " Risk Management (ISO 27001, NIST)" , " Advanced Topics"],
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () =>
    setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="roadmap-section">
      <h2 className="roadmap-title">Home ▶ Cyber Security
        
      </h2>

      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${index * 350}px)` }}
        >
          {steps.map((step, i) => (
            <div className="roadmap-card" key={i}>
              <h3>{step.title}</h3>
              <ul>
                {step.text.map((t, j) => (
                  <li key={j}>• {t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rbtn">

        <button className="btn-prev" onClick={prev}>◀</button>
        <button className="btn-next" onClick={next}>▶</button>
        </div>
      </div>
    <div className="resource">
      <h1>Resources</h1>
      <div className="links">
        <p>Free resources:-</p>
        <div className="resl">
          <h3>Simplilearn</h3>
          <button>Source</button>
          </div>
          <div className="resl">
        <h3>WsCube Cyber-Security</h3>
          <button>Source</button>
          </div>
          <div className="resl">
        <h3>Google Career Certificate</h3>
          <button>Source</button>
          </div>
      </div>
      <div className="links">
        <p>Paid Courses:-</p>
        <div className="resl">
          <h3>Udemy (Nathans House) </h3>
          <button>Source</button>
          </div>
          <div className="resl">
          <h3>Simplilearn </h3>
          <button>Source</button>
          </div>
          <div className="resl">
           <h3>Coursera</h3>
          <button>Source</button>
          </div>
      </div>
    </div>

    <div className="careerpath">
      <h1>🚀Career Path</h1><hr />
      <ul>
        <li>Security Analyst – Monitors threats and investigates incidents.
</li>
<li>Penetration Tester (Ethical Hacker) – Finds vulnerabilities through authorized attacks.
</li>
<li>SOC Analyst – Detects and responds to cyber alerts.
</li>
<li>Security Engineer – Builds and maintains security infrastructure.
</li>
<li>Incident Responder – Handles breaches and mitigates damage.

</li>

      </ul>
      <h1>Average Salaries in India</h1><hr />
      <ul>
        <li>Beginner: ₹4–6 LPA</li> 
<li>Mid-level: ₹7–20 LPA</li>
<li>Senior: ₹25+ LPA</li>
      </ul>
    </div>
    <div className="tips">
      <h1>💡 Tips for Beginners</h1><hr />
      <ul>
        <li>Learn the basics first – Networking, Linux, OS fundamentals.

</li>
<li>Practice hands-on – Use TryHackMe, HackTheBox, labs.

</li>
<li>Build strong problem-solving skills – Debug, analyze, think logically.

</li>
<li>Stay updated – Follow security news, CVEs, blogs.

</li>
<li>Start with small projects – Password checker, port scanner, log analyzer.

</li>
      </ul>
    </div>
    </div>
  );
}
