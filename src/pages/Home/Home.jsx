import React from 'react'
import './Home.css'

function Home() {

    const writeups=[
        {subtitle:'Sports Science',
          paragraph:'Sport science applies the study of science to sporting activities. The focus of sport science is to help maximise performance and endurance in preparation for events and competitions while lessening the risk of injury. It’s used to help identify strengths and weaknesses so that a training program can be individualised for everyone from athletes to the elderly, and everyone in-between. Sports Scientists ensure that athletes are up to date with current training protocols, testing, and preparation. Our highly experienced Sport Science staff are able to provide evidence based interventions to athletes to improve performance. Areas covered include: Z Sport specific testing Z Movement screenings Z Injury prevention and corrective exercise prescription Z Strength and conditioning Z Program design and monitoring'},
          {
            subtitle:'ATHLETICS',
            paragraph:'athletics, also called track-and-field sports or track and field, a variety of competitions in running, walking, jumping, and throwing events. Although these contests are called track and field (or simply track) in the United States, they are generally designated as athletics elsewhere. This article covers the history, the organization, and the administration of the sports, the conduct of competitions, the rules and techniques of the individual events, and some of the sports’ most prominent athletes.'
          },
          {
            subtitle:'Football',
            paragraph:'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in North America, Ireland and Australia); gridiron football (specifically American football or Canadian football); Australian rules football; rugby union and rugby league; and Gaelic football.[1] These various forms of football share to varying extents common origins and are known as "football codes".'
          },
          {
            subtitle:'Gym',
            paragraph:'Gym is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in North America, Ireland and Australia); gridiron football (specifically American football or Canadian football); Australian rules football; rugby union and rugby league; and Gaelic football.[1] These various forms of football share to varying extents common origins and are known as "football codes".'
          }
    ]


  return (
    <div className='home-page'>
        <div className="hero-section">
          <h2>Wollo University Sport Science Acadamey</h2>
          <h2>No Pain, No Gain!!!</h2>

        </div>
        {writeups.map((item,index)=>(
           <div key={index} className='sections'>
            <h2 className='subtitle'>{item.subtitle}</h2>
            <p className='detail'>{item.paragraph}</p>
           </div>
        ))

        }
        

    </div>
  )
}

export default Home