import React from "react";
import resumePdf from '../pdf/Clary_Resume_2.pdf';

export default function Resume() {
    return(
        <div style={{height: '100vh'}}>
            <object aria-label="Resume" data={resumePdf} type="application/pdf" width="100%" height="100%"></object>
        </div>
    )
}