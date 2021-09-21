
import './App.css';
import React from 'react';
import Header from './components/Header';
import NewsNotification from './components/NewsNotification';
import Title from './components/Title';
import MainSection  from './components/MainSection';
import SideSection from './components/SideSection';




function App() {

  // ......API Call and response
  // as a result the data would be available
  
  

  const newsNotificationData = [
    {
      topic: 'KORONAVIRUS',
      body: 'Voiko koronarokotteista ilmetä haittoja vielä vuosien jälkeen? ”Haittaprofiili alkaa olla jo hyvin tiedossa”, ylilääkäri sanoo'
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: 'Ensin WTC-pelastajat olivat kansakunnan sankareita, sitten viranomaisten kiinnostus lopahti'
    },
    {
      topic: 'JÄÄKIEKKO',
      body: 'Kärpät on rautaa!'
    }
  ];

  const MainSectionData = [
    {
      topic: 'Joukkoliikenne |',
      body: 'Metro- ja raitioliikenne uhkaavat seisahtua kahdeksi päiväksi lakon vuoksi'
    },
    {
      topic: 'Rajoitukset |',
      body: 'Hallituksessa jälleen kiistaa ravintolarajoituksista, aukioloajat ovat joka tapauksessa pidentymässä'
    }
    
  ];

  const SideSectionData = [
    {
      topic: '1  Pankit |',
      body: 'S-pankki sai valvojalta liki 1,7 miljoonan euron seuraamusmaksun'
     },
    {
      topic: '2  Koronatestaus |',
      body: 'Kahdesti rokotettujen testaamisesta luovutaan laajalti'
    },
    {
      topic: '3  Sijoittaminen |',
      body: '21-vuotias opiskelija avasi vahingossa kaksi osakesäästötiliä, tuloksena tuhansien eurojen rangaistus'
    },
    {
      topic: '4  Joukkoliikenne |',
      body: 'HKL:n lakko pysäyttää metrot ja raitiovaunut lähes kokonaan - Edes yksittäisiä vuoroja ei ajeta'
    },
    {
      topic: '5  HS-analyysi |',
      body: 'Vauras Norja harppasi vasemmalle, ja hurjasti vahvistunut äärivasemmisto vaatii öljyntuotannon lakkauttamista'
    },
    {
      topic: '6  Terveys |',
      body: 'Onko sinullakin "piparkakkukieli"? Saatat narskutella hampaita tietämättäsi'
    },
    {
      topic: '7  EU |',
      body: 'Suomi lähti mukaan EU-maiden kirjeeseen jossa vaaditaan velkakuria - Sdp:ssä hermostuttiin, Saarikko kuvailee ennakkovaikuttamiseksi'
    }  
  ];

  return (
    <div>
         
      <Header />
      <Title />
        
      {
        newsNotificationData.map(element => <NewsNotification topic={ element.topic } body = { element.body }/>)            
      }

      <div class="container">
        <div class="column">
        <div class="item">
        {
        MainSectionData.map(element=> <MainSection topic={ element.topic } body = { element.body }/>)
        }
        </div>
        </div>

        <div class="column">
        <div class="item2">
        {
         SideSectionData.map(element=> <SideSection topic={ element.topic } body = { element.body }/>)
        }
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;



