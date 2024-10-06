import { useContext } from "react";
import { QuizeContext } from "../contextApi/quizeContext";

const QuizePage = () => {
    const { quizeData } = useContext(QuizeContext)
 //console.log(quizeData)
    return(
        <>
        <div>
            {quizeData.map((ele, index) => {
                return(
                    <>
                    <div style={{width:"100%", border:"1px solid black"}}>
                        <div key={index} style={{fontFamily:"sans-serif"}}>
                            <h3>Q.{index+1} {ele.question}</h3>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default QuizePage;