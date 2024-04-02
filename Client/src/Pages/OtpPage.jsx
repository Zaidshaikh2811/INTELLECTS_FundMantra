import React, { useState } from 'react';

function OtpPage() {
  const [otpValues, setOtpValues] = useState(['', '', '', '']);

  const handleChange = (index, value) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index !== 0 && otpValues[index] === '') {
      const updatedOtpValues = [...otpValues];
      updatedOtpValues[index - 1] = '';
      setOtpValues(updatedOtpValues);
    } else if (/^[a-zA-Z0-9]*$/.test(e.key) && index < 3) {
      const updatedOtpValues = [...otpValues];
      updatedOtpValues[index + 1] = '';
      setOtpValues(updatedOtpValues);
    }
  };

  return (
    <div className="otp">
        
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <div className="otp-inputs">
        {otpValues.map((value, index) => (
            <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>
      <button>Submit</button>
    </div>
            </div>
  );
}

export default OtpPage;
