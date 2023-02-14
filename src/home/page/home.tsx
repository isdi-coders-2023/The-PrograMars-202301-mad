import './home.scss';

export default function Home() {
  return (
    <div className="home">
      <p className="about -text" role="paragraph">
        This website will allow you to see all the Mars photos taken by the
        Curiosty NASA’s rover. Besides this, you can filter the images based on
        your preferred rover’s camera and you will be able to save all your
        favorite images. There you will be able to give a name to each saved
        picture, allowing you to quickly find the ones you love the most.
      </p>
      <div className="quote">
        <p className="quote__src" role="paragraph">
          Magellanic Clouds over Chile
        </p>
        <p className="quote__author" role="paragraph">
          Felipe Mac Auliffe López
        </p>
        <p className="quote__exp" role="paragraph">
          The two prominent clouds in this Chilean Atacama Desert skyscape
          captured on January 21 actually lie beyond our Milky Way galaxy. Known
          as the Large and the Small Magellanic Clouds they are so named for the
          16th century Portuguese explorer Ferdinand Magellan, leader of the
          first circumnavigation of planet Earth. Famous jewels of southern
          hemisphere skies, they are the brightest satellite galaxies of the
          Milky Way. The larger cloud is some 160,000 light-years, and the
          smaller 210,000 light-years distant. While both are irregular dwarf
          galaxies in their own right, they exhibit central barred structures in
          the deep wide-angle view. Wide and deep exposures also reveal faint
          dusty galactic cirrus nebulae and the imprints of gravitational tidal
          interactions between the Large and Small Magellanic Clouds..
        </p>
        <button className="quote__read-more">Read More</button>
        <button className="quote__view">View HD</button>
      </div>
    </div>
  );
}
