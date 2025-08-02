import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import {useState} from "react";
const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [wordChunk, setWordChunk] = useState<string>('');
  const attributeList: string[] = [
    "Software Engineer",
    "Chelsea Fan",
    "Pro-fooseballer",
    "Climate Enthusiast",
  ];
  const nameAcronyms = [
    { letter: 'L', word: 'LINKEDIN'},
    { letter: 'U', word: 'UNCOVER'},
    { letter: 'C', word: 'CONTACT'},
    { letter: 'A', word: 'ABOUT ME'},
    { letter: ' ', word: null},
    { letter: 'S', word: 'SKILLS'},
    { letter: 'C', word: 'CREATIONS'},
    { letter: 'A', word: 'ACHIEVEMENTS'},
    { letter: 'L', word: 'LEARNINGS'},
    { letter: 'A', word: 'ASPIRATIONS'}
  ]
  function handleHover(index: number) {
    setHoveredIndex(index);
    const acronym = nameAcronyms.find((_, i) => i === index);
    if (acronym && acronym.word) {
      setWordChunk(acronym.word.substring(1))
    }
  }
  function hoverExit(){
    setHoveredIndex(null);
  }
  console.log(wordChunk);



  return (
    <>
      <div className="container">
        <div className="top-box">
          <span className={"link"}>Hello!</span>
        </div>
        <div className="center-box">
          <div className={`name-container${hoveredIndex !== null ? '-active' : ''}`}>
            <span className={`name-letter ${hoveredIndex === 0 ? 'hovered' : ''}`} onMouseEnter={() => handleHover(0)} onMouseLeave={hoverExit}>L{hoveredIndex === 0 && <span className={'new-word-chunk'}>{wordChunk}</span>}</span>
            <span className={`name-letter ${hoveredIndex === 1 ? 'hovered' : ''}`} onMouseEnter={() => handleHover(1)} onMouseLeave={hoverExit}>U{hoveredIndex === 1 && <span className={'new-word-chunk'}>{wordChunk}</span>}</span>
            <span className={`name-letter ${hoveredIndex === 2 ? 'hovered' : ''}`} onMouseEnter={() => handleHover(2)} onMouseLeave={hoverExit}>C{hoveredIndex === 2 && <span className={'new-word-chunk'}>{wordChunk}</span>}</span>
            <span className={`name-letter ${hoveredIndex === 3 ? 'hovered' : ''}`} onMouseEnter={() => handleHover(3)} onMouseLeave={hoverExit}>A{hoveredIndex === 3 && <span className={'new-word-chunk'}>{wordChunk}</span>}</span>
            <span className={`name-letter ${hoveredIndex === 4 ? 'hovered' : ''}`}>&nbsp;</span>
            <span className={`name-letter ${hoveredIndex === 5 ? 'hovered' : ''}`} onMouseEnter={() => handleHover(5)} onMouseLeave={hoverExit}>S{hoveredIndex === 5 && <span className={'new-word-chunk'}>{wordChunk}</span>}</span>
            <span className={`name-letter ${hoveredIndex === 6 ? 'hovered' : ''}`} onMouseEnter={() => handleHover(6)} onMouseLeave={hoverExit}>C{hoveredIndex === 6 && <span className={'new-word-chunk'}>{wordChunk}</span>}</span>
            <span className={`name-letter ${hoveredIndex === 7 ? 'hovered' : ''}`} onMouseEnter={() => handleHover(7)} onMouseLeave={hoverExit}>A{hoveredIndex === 7 && <span className={'new-word-chunk'}>{wordChunk}</span>}</span>
            <span className={`name-letter ${hoveredIndex === 8 ? 'hovered' : ''}`} onMouseEnter={() => handleHover(8)} onMouseLeave={hoverExit}>L{hoveredIndex === 8 && <span className={'new-word-chunk'}>{wordChunk}</span>}</span>
            <span className={`name-letter ${hoveredIndex === 9 ? 'hovered' : ''}`} onMouseEnter={() => handleHover(9)} onMouseLeave={hoverExit}>A{hoveredIndex === 9 && <span className={'new-word-chunk'}>{wordChunk}</span>}</span>
          </div>
        </div>
        <div className="bottom-box">
          <span className={"typewriter"}>
            <Typewriter words={attributeList} cursor={true} cursorStyle={'_'} loop={false}></Typewriter>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
