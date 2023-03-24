import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import "./pro.css";
function Pro() {
  return (
    <div className="project-section">
      <div className="projects" id="projects">
        <div className="project-heading">
          <h2>MY PROJECTS</h2>
          <span className="project-line"></span>
        </div>
      </div>
      <div className="projects-cards">
        <section class="dark">
          <article className="postcard dark blue">
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="https://picsum.photos/1000/1000"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">Podcast Title</a>
              </h1>
              <div className="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
                minima enim, commodi quia, doloribus eius! Ducimus nemo
                accusantium maiores velit corrupti tempora reiciendis molestiae
                repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt
                neque nulla unde ipsum dolores nobis enim quidem excepturi,
                illum quos!
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <Button variant="dark" className="project-button">
                    Demo Link
                  </Button>
                </li>
                <li class="tag__item">
                  <Button variant="dark" className="project-button">
                    Github Link
                  </Button>
                </li>
              </ul>
            </div>
          </article>
          <article class="postcard dark red">
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="https://picsum.photos/501/500"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red">
                <a href="#">Podcast Title</a>
              </h1>
              <div className="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
                minima enim, commodi quia, doloribus eius! Ducimus nemo
                accusantium maiores velit corrupti tempora reiciendis molestiae
                repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt
                neque nulla unde ipsum dolores nobis enim quidem excepturi,
                illum quos!
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <Button variant="dark" className="project-button">
                    Demo Link
                  </Button>
                </li>
                <li className="tag__item">
                  <Button variant="dark" className="project-button">
                    Github Link
                  </Button>
                </li>
              </ul>
            </div>
          </article>
          <article class="postcard dark green">
            <a class="postcard__img_link" href="#">
              <img
                class="postcard__img"
                src="https://picsum.photos/500/501"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title green">
                <a href="#">Podcast Title</a>
              </h1>
              <div className="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
                minima enim, commodi quia, doloribus eius! Ducimus nemo
                accusantium maiores velit corrupti tempora reiciendis molestiae
                repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt
                neque nulla unde ipsum dolores nobis enim quidem excepturi,
                illum quos!
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <Button variant="dark" className="project-button">
                    Demo Link
                  </Button>
                </li>
                <li class="tag__item">
                  <Button variant="dark" className="project-button">
                    Github Link
                  </Button>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard dark yellow">
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="https://picsum.photos/501/501"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title yellow">
                <a href="#">Podcast Title</a>
              </h1>
              <div className="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
                minima enim, commodi quia, doloribus eius! Ducimus nemo
                accusantium maiores velit corrupti tempora reiciendis molestiae
                repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt
                neque nulla unde ipsum dolores nobis enim quidem excepturi,
                illum quos!
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <Button variant="dark" className="project-button">
                    Demo Link
                  </Button>
                </li>
                <li className="tag__item">
                  <Button variant="dark" className="project-button">
                    Github Link
                  </Button>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Pro;
