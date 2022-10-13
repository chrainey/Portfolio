import PercySun from '../assets/images/percysun.jpg'
import PercyBeach from '../assets/images/percybeach.jpg'
import Shearer from '../assets/images/Alan-Shearer.jpeg'
import Grounded from '../assets/images/grounded.jpeg'

const About = () => {
  return (
    <div className="main">
      <div className="about-container">
        <h1 className="about-header">About Me</h1>
        <div className="about-me">
          <img className="profile-image" src={PercySun} alt='profile-pic'></img>
          <div className="about-text">
            <div className="about-title">
              <h4 className="about-title-header">I recently completed General Assembly's Software Immersive course and I'm looking for my first Junior role</h4>
            </div>
            <p>A lot has happened since 2020 for everyone and it's the same for me too. From 2017 to 2020 I was working for TUI in the Summer and Crystal Ski in the Winter. I had been working numerous customer service jobs in the UK and I really needed a change. I started workign as a holiday rep out in Agadir, Morocco. Even in Morrocco the summer doesnt last all year so I decided to choose the option of a ski rep in the Winter.</p>
            <p>After one summer and one winter season I was promoted to Resort Manager. This was a real step up in resonsibility as I was now in charge of teams of reps in various different locations. I spent the following 2 summers and winter working in Italy. Summer I was on Lake Garda and winter I was working in the beautiful Aosta Valley.</p>
            <p>Unfortunately Brexit happened and I didn't have the benefit of a grandparent from Ireland to gain me an EU passport!! So I had to come back to good old blighty. As my family lives in Chester I had the option to move back up north or move in with my girlfriend in sunny Bournemouth as she also had recently had to return to the UK</p>
            <p>To get a job staright away I went back into the hospitality trade working in a pub but it was too comfy and I needed something to push me in my career now that the life of a seasonaire was over. Then lockdown happened. I've always had a big interest in computers and technology and looking online I saw that there were some great opportunities in software engineering. I always though that I would have to go back to Uni to study but then I came across coding bootcamps.</p>
            <p>After some research I decided to take the plunge and enroll in a 12-week Software Immersive bootcamp with General Assembly. This course covered the fundamentals of web development from the frontend through to the backend. I met some great people and managed to produced some really cool and interesting projects which you can find on this site.</p>          
            <p>I've always wanted to know how the internet works and how data is prouduced and maintained so that everyday we can look at really cool websites that have shaped British culture over the last 20 years. Now is the next part of my journey and I think I'm in the right place!!</p>
          </div>
        </div>
        <h1 className="interests-header">My Interests</h1>
        <div className="interests">
          
          <div className="percy">
            <h1 className="interest-header">My Dog Percy</h1>
            <img className="percy-image" src={PercyBeach} alt='dog-on-beach'></img>
            <div className="percy-text">
              <p>Let me introduce you to a big part of my life!! We adopted Percy from a dog home in Cyprus way back at the start of the first covid lockdown in May 2020. He was picked up by the local pound wandering around on the beach after being abandoned. He was a big ball of matted fur but luckily my girlfriend saw through this online and we adopted him. It took him 6 months to be perfectly comfortable with us but now he is my best mate!!
He loves walks on the beach and walking in the New Forest which is a stones throw from our home. He’s very active and needs at least 3 walks a day but with the scenery around here its never a dull walk!!</p>
            </div>
          </div>
          <div className="football">
            <h1 className="interest-header">Blackburn Rovers and Football</h1>
            <img className="football-image" src={Shearer} alt='Alan-Shearer'></img>
            <div className="football-text">
              <p>I’ve always been a big fan of football. I can remember the glory days around the start of the Premier League era and I was also a massive Serie A fan in the late 90s. As a teenager my Grandad used to take me to see his local club Blackburn Rovers. As they had just starting signing top players  I was very excited to start supporting them aswell. Back then Blackburn had such good support and the atmosphere at Ewood Park was great when we were in the Premier Leage. I was a season ticket holder until I moved abroad with TUI and miss going to games regularly, although Blackburn are far from the team they used to be and it’s very rare to see Ewood at full capacity anymore. </p>
            </div>
          </div>
          <div className="computer-games">
            <h1 className="interest-header">Computer Games</h1>
            <img className="grounded-image" src={Grounded} alt='Grounded-game'></img>
            <div className="games-text">
              <p>I love playing computer games. When I moved abroad I made sure I got a decent gaming laptop!! I’ve always worked part-time as a teenager so I always made sure I had a decent PC that good play the latest games. I don’t really play console anymore, even though I did manage to get a PS5 in lockdown!! I used to play a lot of sports games and a lot of Call of Duty but nowadays I really like slower paced games that involve more of a story. Currently my favourite game to play is Grounded. I’ve been playing it on early access for the last couple of years but it was fully released this summer and is a brilliant game. You play one of 4 kids that have been shrunk in their back garden. (If your old enough think Honey I shrunk the kids as a exploration crafting game)
You have to survive in an environment which is full of 80s and 90s retro memorabilia but you are the size of an ant!! Think of giant wheelbarrows, scary spider holes and giant killer bugs and you start to get the gist. Check it out!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About