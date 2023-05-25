import React, { useEffect ,useState} from 'react';
import "../styles/textprofile.css";



function TextProfile(props ) {
    const [currentWord, setCurrentWord] = useState('programmer');

    useEffect(() => {
        const words = ['Front-End Developer', 'designer'];
        let index = 0;
        let letterIndex = 0;
        let timeout;
        let direction = 'forward';
    
        const animate = () => {
          if (index >= words.length) {
            index = 0;
          }
    
          setCurrentWord(words[index].slice(0, letterIndex));
    
          if (direction === 'forward') {
            if (letterIndex < words[index].length) {
              letterIndex++;
              timeout = setTimeout(animate, 100);
            } else {
              direction = 'backward';
              timeout = setTimeout(animate, 1000);
            }
          } else if (direction === 'backward') {
            if (letterIndex > 0) {
              letterIndex--;
              timeout = setTimeout(animate, 80);
            } else {
              direction = 'forward';
              index++;
              timeout = setTimeout(animate, 100);
            }
          }
        };
    
        animate();
    
        return () => clearTimeout(timeout);
      }, []);

  return (
    <>
        <div className="paragraph p-4">
            <h3 >HI, im a  </h3>
            <h1 className='my-3 changing-words'>{currentWord} 
                <span className='typing-text'>|</span>
            </h1>
            <h3>based in Marrakech,Morocco.</h3>
        </div>
    </>
  );
}

export default TextProfile;