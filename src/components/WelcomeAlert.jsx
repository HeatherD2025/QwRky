import { useState } from "react";
import { Alert } from "react-bootstrap";
import "../styles/home.css";

export default function WelcomeAlert() {
  const [show, setShow] = useState(true);
  
  return (
    <>

      {/* When an alert is dismissed, the element is completely removed from the page structure. 
      If a keyboard user dismisses the alert using the close button, their focus will 
      suddenly be lost and, depending on the browser, reset to the start of the page/document. 
      For this reason, we recommend including additional JavaScript that listens for the 
      closed.bs.alert event and programmatically sets focus() to the most appropriate location 
      in the page. If you’re planning to move focus to a non-interactive element that normally 
      does not receive focus, make sure to add tabindex="-1" to the element. */}

      {show && (
        <Alert className="welcomeAlert" onClose={() => setShow(false)} dismissible>
          <strong>Welcome to Qrk-y</strong> Your gateway to the latest in science
          and space news!
        </Alert>
      )}

    </>
  );
};