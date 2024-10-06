import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const QuizeContext = createContext();

export const QuizeProvider = ({children}) => {
    const [catego, setCatego] = useState("")
    const [leve, setLeve] = useState("")
    const [queNumber, setQueNumber] = useState("")

    const [quizeData, setQuizeData] = useState([])
// console.log(quizeData)
    function quizeSetup(obj){
        setCatego(obj.category)
        setLeve(obj.level)
        setQueNumber(obj.choosequestions )
    }

    // console.log({
    //     catego,
    //     leve,
    //     queNumber
    // })

    async function fetchQuizeData(catego, leve, queNumber){
        try {
            let res = await axios({
                method: "get",
                url : `https://opentdb.com/api.php?amount=${queNumber}&category=${catego}&difficulty=${leve}&type=multiple`
            })

            // console.log(res?.data?.results)
            setQuizeData(res?.data?.results)
        } catch (error) {
            console.log("error in fetchQuize", error);
        }
    }

    useEffect(() => {
        fetchQuizeData(catego, leve, queNumber)
    }, [catego, leve, queNumber])

    // console.log(catego, leve, queNumber)

    return(
        <QuizeContext.Provider value={{ quizeSetup, quizeData }}>
            {children}
        </QuizeContext.Provider>
    )
}









// let res = await axios({
//     method:"get",
//     url:`https://opentdb.com/api.php?amount=${queNumber}&category=${catego}&difficulty=${leve}&type=multiple`
// })