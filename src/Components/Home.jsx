import React, { useState } from 'react'
export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        image: '',
        gender: '',
        courses: []
    })
    


    const handleOnchange = (event) => {
        if (event.target.name === 'courses') {
            let copy = { ...formData }

            if (event.target.checked) {
                copy.courses.push(event.target.value)
            } else {
                copy.courses = copy.courses.filter((el) => el !== event.target.value)

            }
            setFormData(copy)

        }
        else {
            setFormData(() => ({
                ...formData,
                [event.target.name]: event.target.value
            }))

        }
        console.log(formData);
    }

    const handleOnclick = (event) => {
        event.preventDefault()
        
        let innerDiv = document.createElement('div')
        innerDiv.classList.add('have-details')
        innerDiv.innerHTML = `        
        <div class="description-div">
        <p><b>${formData.name}</b></p>
        <p>${formData.gender}</p>
        <p>${formData.email}</p>
        <p><a href="${formData.website}"> ${formData.website}</a></p>
        <p>${formData.courses}</p>
        </div>
        <div class="image-div">
        <img src=${formData.image} />
        </div>`



        var actualEle = document.querySelector('.details-list');
        actualEle.appendChild(innerDiv)

        document.getElementById('formD').reset();
    }
    return (

        <>
            <div className="navbar">
                <h1 className="mytitle" >Student Enrollment Form</h1>
            </div>
            <div className="outer">
                <div className="myForm">
                    <form onSubmit={handleOnclick} id="formD" >
                        <label >Name:</label>
                        <input type="text" name="name" onChange={handleOnchange} required /><br />
                        <label >Email:</label>
                        <input type="email" name="email" onChange={handleOnchange} required /><br />
                        <label >Website:</label>
                        <input type="url" name="website" onChange={handleOnchange} required /><br />
                        <label >Image Link:</label>
                        <input type="url" name="image" onChange={handleOnchange} required /><br />
                        <label >Gender:</label>
                        <input type="radio" name="gender" value="Male" onChange={handleOnchange} />
                        <label>Male</label>
                        <input type="radio" name="gender" value="Female" onChange={handleOnchange} />
                        <label>Female</label><br />
                        <label>Courses:</label>
                        <input type="checkbox" name="courses" value="React" className="checkboxex" onChange={handleOnchange} />
                        <label>React</label>
                        <input type="checkbox" name="courses" value="Angular" className="checkboxex" onChange={handleOnchange} />
                        <label>Angular</label>
                        <input type="checkbox" name="courses" value="Nodejs" className="checkboxex" onChange={handleOnchange} />
                        <label>Node js</label><br></br>

                        <button className="btn"  >Submit</button>
                    </form>

                </div>


                <div className="rightdiv">

                        <div className="main-outer-right">
                            <h1>Enrolled Students</h1>
                            <div className="header">
                                <h2 className='description-h2'>Description</h2>
                                <h2 className='img-h2' >Image</h2>
                            </div>

                            <div className="details-list">
                            
                            </div>
                        </div>

                </div>

            </div >
        </>

    )
}