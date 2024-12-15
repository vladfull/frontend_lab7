import React, { Component } from 'react'
import Image from './Image';

export class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
          imageSize: 100,
          showImage: true,
        };
    }

    increaseImage = () => {
        this.setState((prevState) => ({ imageSize: prevState.imageSize + 10 }));
    };
    
    decreaseImage = () => {
      this.setState((prevState) => ({ imageSize: Math.max(prevState.imageSize - 10, 10) }));
    };

    toggleImage = () => {
      this.setState((prevState) => ({ showImage: !prevState.showImage }));
    };
      
    render() {
        return (
            <div>
              <p>Дата народження: 29.04.2005. Місто: Козятин</p>
              <p>
                Освіта: Школа #1 ім. Т. Г. Шевченка,
                НТУУ КПІ ім. Ігоря Сікорського
              </p>
              
              <h4 id="element-4">Хобі:</h4>
              <ul id="element-5">
                  <li>Комп'ютерні ігри</li>
                  <li>Рибалка</li>
                  <li>Блог</li>
              </ul>
              <h4>Мої улюблені фільми</h4>
              <ol>
                  <li>"Пуститися берега" (2008)</li>
                  <li>"Лофт" (2014)</li>
                  <li>"Острів Проклятих" (2010)</li>
              </ol>
                  
              <h2>Моє улюблене місто</h2>
              <p>
                  Ки́їв — столиця та найбільше місто України. 
                  Розташований у середній течії Дніпра, у північній Наддніпрянщині. 
                  Політичний, соціально-економічний, транспортний, освітньо-науковий, історичний, культурний та духовний центр України. 
                  У системі адміністративно-територіального устрою України Київ має спеціальний статус, визначений Конституцією, і не входить до складу жодної області, хоча і є адміністративним центром Київської області. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.
              </p>

              {this.state.showImage && (
                <Image
                  src="https://lifeimg.pravda.com/images/doc/4/5/457f758-depositphotos-85021828-xl.jpg"
                  alt="Фото Києва"
                  size={this.state.imageSize}
                />
              )}
              <div>
                <button onClick={this.toggleImage}>
                  {this.state.showImage ? 'Видалити' : 'Додати'}
                </button>
                <button onClick={this.increaseImage}>Збільшити</button>
                <button onClick={this.decreaseImage}>Зменшити</button>
              </div>
            </div>
        );
    }
}

export default Content