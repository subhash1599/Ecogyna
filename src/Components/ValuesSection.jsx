// ValuesSection.js
import React from "react";
import Trust from "../assets/Trust.png";
import Authenticity from "../assets/Authenticity.png";
import Impact from "../assets/Impact.png";
import Fun from "../assets/FunAndEngaging.png";

function ValuesSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center">
              <img
                src={Trust}
                alt="Trust Icon"
                className="w-32 h-32 mr-4 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">Trust</h3>
                <p className="text-gray-600">
                  We value the trust of our community. We strive to be
                  transparent and honest in everything we do, from the content
                  we share today to sourcing our products in the future.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={Authenticity}
                alt="Authenticity Icon"
                className="w-32 h-32 mr-4 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">Authenticity</h3>
                <p className="text-gray-600">
                  We are genuine in our mission to promote sustainability and
                  environmental awareness. An authentic community of
                  eco-conscious people can inspire each other on the journey
                  towards sustainability.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={Impact}
                alt="Impact Icon"
                className="w-32 h-32 mr-4 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">Impact</h3>
                <p className="text-gray-600">
                  We measure our success by our impact on the planet and our
                  community. We aim to empower our sellers and customers to make
                  responsible choices that benefit their well-being and the
                  well-being of others.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={Fun}
                alt="Fun & Engaging Icon"
                className="w-32 h-32 mr-4 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">Fun & Engaging</h3>
                <p className="text-gray-600">
                  Moving towards a sustainable lifestyle and the constant news
                  around climate change can be stressful. We aim to inject fun
                  and creativity into everything we do, from designing our
                  products to providing services.
                </p>
              </div>
            </div>
          </div>
    </section>
  );
}

export default ValuesSection;
