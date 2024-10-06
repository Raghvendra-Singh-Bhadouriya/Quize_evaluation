import { Routes, Route } from "react-router-dom"
import LeaderBoard from "./Leaderboard"
import SetUpQuize from "./quizeSetup"
import QuizePage from "./Quizepage"

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<SetUpQuize/>}/>
            <Route Path="/leader-board" element={<LeaderBoard/>}/>
            <Route path="/quize-page" element={<QuizePage/>}/>
        </Routes>
    )
}

export default AllRoutes;