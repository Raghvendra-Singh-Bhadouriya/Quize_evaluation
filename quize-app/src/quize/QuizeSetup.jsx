import React,{ useContext, useRef } from 'react'
import { QuizeContext } from '../contextApi/quizeContext'
import { Link } from 'react-router-dom'

const SetUpQuize = () => {

    const name = useRef(null)
    const category = useRef(null)
    const level = useRef(null)
    const choosequestions = useRef(null)

    const { quizeSetup } = useContext(QuizeContext)

    function handleSubmit(e){
        e.preventDefault()

        let obj={
            name : name.current.value,
            category : category.current.value,
            level : level.current.value,
            choosequestions : choosequestions.current.value
        }
        // console.log(obj)
        
        quizeSetup(obj)


        name.current.value=""
        category.current.value=""
        choosequestions.current.value=""

        
    }

    return(
        <>
        <div>
            <h1>Set up your Quize</h1>
            <form onSubmit={handleSubmit}>
               <input
               ref={name}
               placeholder='Enter Your Name'
               required={true}
               />
               <select
               ref={category}
               type="text"
               placeholder='Select Category'
               required={true}
               >
                <option value="">Select Category</option>
                <option value="25">General Knowledge</option>
                <option value="21">Sports</option>
                <option value="19">Geography</option>
               </select>

               <select
               ref={level}
               placeholder='Select Level'
               required={true}
               >
                <option value="">Select Level</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
               </select>

               <input
               ref={choosequestions}
               type="number"
               placeholder='Choose number of Question'
               required={true}
               />
                <Link to='/quize-page'>
                    <button type="submit">
                        Start Quize
                    </button>
                </Link>
            </form>
        </div>
        </>
    )
}

export default SetUpQuize;