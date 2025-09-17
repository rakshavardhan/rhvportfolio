import { useState, useEffect } from 'react';

export function useTypingAnimation(texts: string[], typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentText = texts[textIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [texts, textIndex, charIndex, isDeleting, typeSpeed, deleteSpeed, pauseTime]);

  return displayText;
}
