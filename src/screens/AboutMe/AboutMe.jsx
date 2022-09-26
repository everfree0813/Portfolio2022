import "./AboutMe.css";

let imgUrl = "https://picsum.photos/800"

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme-container">
        <img src={imgUrl} alt="aboutme"/>
        <div>
            <h1>About Me</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque eos doloribus perferendis minima! Libero repellat repellendus, distinctio mollitia blanditiis exercitationem laboriosam tenetur sint fugit in sunt praesentium nemo accusantium rerum voluptatem, perferendis quis vel? Corrupti, distinctio aut iure unde consequuntur nihil suscipit, architecto quae amet repellat placeat natus laboriosam!
            </p>

            <h1>Education</h1>
            <p>Mokwon University- South Korea:
                Physics, Bachelor's degree

            Wake Tech Community College - Raleigh:
            Web Development, Associate's degree and Certifications</p>
        </div>
    </div>
  )
}

export default AboutMe