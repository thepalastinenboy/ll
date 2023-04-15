import React from "react";
import { HeaderTop } from "../components";
import { BasicLayout } from "../layouts/basicLayout";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <BasicLayout>
      <Helmet>
        <title>{`Über mich - B2 Lernen`}</title>
        <meta name="keywords" content="deutsch b2 lernen" />
      </Helmet>
      <HeaderTop />
      <div className="b2-block">
        <div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Über mich
            </div>
            <div className="b2-opacity block-title no-margin b2-block-subtitle">
            Warum habe ich diese Seite erstellt?
            </div>
          </div>
        </div>
        <div className="b2-block-content">
          <div className="single-page">
            <div className="margin-top">
              <div className="single-post-content margin-top">
                <>
                  <p>
                    Herzlich Willkommen auf meiner Webseite! Mein Name ist Ubai
                    und ich habe diese Seite erstellt, um meine Leidenschaft
                    f&uuml;r Deutsch lernen mit anderen zu teilen.
                  </p>
                  <p>
                    Als Nicht-Muttersprachler mit dem Niveau B2 habe ich mich
                    oft damit besch&auml;ftigt, die Grammatik und den Wortschatz
                    zu erlernen. Es war eine Herausforderung f&uuml;r mich, alle
                    Informationen von verschiedenen Quellen zu sammeln und zu
                    verstehen. Aber ich habe es geschafft, indem ich
                    kontinuierlich ge&uuml;bt und meine F&auml;higkeiten
                    verbessert habe. Dabei habe ich gemerkt, dass viele andere
                    Menschen ebenfalls Schwierigkeiten haben, Deutsch als
                    Fremdsprache zu lernen. Deshalb m&ouml;chte ich meine
                    Erfahrungen und Tipps mit euch teilen, um euch dabei zu
                    unterst&uuml;tzen, eure Deutschkenntnisse zu verbessern.
                  </p>
                  <p>
                    Auf meiner Seite findet ihr alles, was ihr braucht, um
                    Deutsch auf dem Niveau B2 zu lernen. Von Grammatikregeln bis
                    hin zu &Uuml;bungen und Lerntipps ist alles dabei. Dabei
                    habe ich versucht, die Inhalte so anschaulich wie
                    m&ouml;glich zu gestalten, damit ihr sie leicht verstehen
                    und anwenden k&ouml;nnt. Ich m&ouml;chte, dass ihr
                    Spa&szlig; beim Lernen habt und dabei motiviert bleibt, eure
                    Ziele zu erreichen.
                  </p>
                  <p>
                    Wenn euch meine Seite gef&auml;llt, w&uuml;rde ich mich
                    freuen, wenn ihr sie mit euren Bekannten und Freunden teilen
                    w&uuml;rdet. So k&ouml;nnen wir noch mehr Menschen erreichen
                    und ihnen dabei helfen, Deutsch zu lernen.
                  </p>
                  <p>
                    Ich bin davon &uuml;berzeugt, dass jeder Deutsch lernen
                    kann, wenn er die richtige Einstellung hat und hart
                    arbeitet. Daher m&ouml;chte ich euch ermutigen, dran zu
                    bleiben und eure Ziele zu verfolgen.
                  </p>
                  <p>
                    Ich hoffe, dass meine Seite euch inspiriert und motiviert,
                    Deutsch zu lernen. Bei Fragen oder Anregungen k&ouml;nnt ihr
                    mich gerne kontaktieren.
                  </p>
                  <p>Herzliche Gr&uuml;&szlig;e, Ubai</p>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default About;
