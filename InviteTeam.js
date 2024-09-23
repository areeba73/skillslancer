import React, { useState } from "react";
import '../css/Candidate.css' // Import a CSS file for custom styling

const TeamInvite = () => {
  const [emails, setEmails] = useState(["", "", ""]);

  const handleChange = (index, event) => {
    const newEmails = [...emails];
    newEmails[index] = event.target.value;
    setEmails(newEmails);
  };

  const addEmailField = () => {
    setEmails([...emails, ""]);
  };

  return (
    <div className="team-invite-container">
      <h2>Invite your Team</h2>
      <p>Enter your team member's email, we will send them an invite to join Wellfound.</p>
      {emails.map((email, index) => (
        <input
          key={index}
          type="email"
          placeholder="e.g. person@company.com"
          value={email}
          onChange={(e) => handleChange(index, e)}
          className="email-input"
        />
      ))}
      <button onClick={addEmailField} className="add-member-btn">+ add more team members</button>
      <div className="action-buttons">
        <button className="skip-btn">Skip for now</button>
        <button className="rec-btn">Next up: Start recruiting</button>
      </div>
    </div>
  );
};

export default TeamInvite;