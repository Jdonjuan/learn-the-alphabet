import { useEffect, useState } from "react";
import { Card, Container, Table } from "react-bootstrap";

export default function DisplayLetters({shuffledArray, correctLett}) {
    const [correct, setCorrect] = useState(false)

    function isCorrect(lett){
        if (lett === correctLett) {
            console.log('letter is correct')
            setCorrect(() => true)
        }
        else {
            console.log('letter is not right')
            setCorrect(() => false)

        }
    }

    function displayCorrect(){
        if (correct) {
            return (
                <h1>You are Right!</h1>
            )
        }
        
    }

    console.log('shuffledArray', shuffledArray);
    return (
        <>
            {shuffledArray.map((letter, index) => {
                return (
                    <>
                        <th>
                            <h1 style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                            gap: "1rem",
                            alignItems: "flex-start",
                            cursor: "pointer",
                            backgroundColor: "lightblue",
                            borderStyle: "groove"
                        }} onClick={() => isCorrect(letter)} key={index}>{letter}</h1>
                        </th>
                        
                    </>
                    
                )
            })}
            {displayCorrect()}
            
        </>
    )
}